import UserRepo from '@src/repos/UserRepo';
import { IUser, UserRoles } from '@src/models/User';
import { RouteError } from '@src/other/classes';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { Prisma, PrismaClient, user } from '@prisma/client';
import {prisma} from "@src/constants/db"
import { editUserBody, registerUserBody, userHistoryBody, userHistorySummaryBody } from '../types/user/request';
import { generateArgonHash } from '@src/library/auth/pass';
import UserModel from "@src/models/User"
import { findUser } from '@src/library/db/user';
import { pagination } from '@src/constants/misc';


// **** Variables **** //

export const USER_NOT_FOUND_ERR = 'User not found';
export const USER_USERNAME_DUPLICATE = 'Duplicate Username';
export const USER_EMAIL_DUPLICATE = 'Duplicate Email';


// **** Functions **** //

//Register User

async function register(user: registerUserBody): Promise<user> {

  let checkUser = await prisma.user.findFirst({
    where: {
      OR: [
        {username: user.username},
        {email: user.email}
      ]
    } 
  })
  //Check if username is duplicate
  if(checkUser?.username === user.username) {
    throw new RouteError(
      HttpStatusCodes.BAD_REQUEST,
      USER_USERNAME_DUPLICATE,
    );
  }

  //Check if email is duplicate
  if(checkUser?.email === user.email) {
    throw new RouteError(
      HttpStatusCodes.BAD_REQUEST,
      USER_EMAIL_DUPLICATE,
    );
  }

  let {password, ...otherData} = user

  let data = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    pwdHash: await generateArgonHash(password),
  }

  let userData = UserModel.new(data)


  const dbUser = await prisma.user.create({
    data: userData
  })

  return dbUser
}

/**
 * Get all users.
 */
function getAll(): Promise<user[]> {
  return prisma.user.findMany({})
}

/**
 * Get one user
 * */
function getUserByUsername(username: string) {
  return prisma.user.findFirst({
    where: {
      username
    },
    select: {
      id: true,
      username: true,
      role: true,
      email: true,
      created_at: true,
      firstName: true,
      lastName: true,
    }
  }
  )
}

/**
 * Update one user.
 */
async function updateOne(user: user, update: editUserBody): Promise<user> {
  const persists = user.username ? await findUser(user.username) : false
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      USER_NOT_FOUND_ERR,
    );
  }
  let {password, ...data} = update
  let pwdHash
  if(update.password) pwdHash = await generateArgonHash(update.password)
  // Return user
  return prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      ...data,
      ...(pwdHash ? {pwdHash} : {})
    },
    
  })
}

/**
 * Get History of User
 */

async function getUserHistory(id: number, filters: userHistoryBody) {
  let where = {
    where: {
      user_id: id
    }
  }
  let numberOfItems = await prisma.history.count({...where})
  let numberOfPages = Math.floor(numberOfItems / filters.pageSize) + 1 

  let data = await prisma.history.findMany(
    {
      select: {
        song_id: true,
        played_at: true
      },
      ...where,
      orderBy: {
        played_at: filters.sort
      },
      skip: pagination(filters.page, filters.pageSize),
      take: filters.pageSize,
    }
  )

  let songs = await prisma.$queryRaw`
    select song.id, song.name as song_name, artist.name as artist_name from song
    inner join artist_song
    on artist_song.song_id = song.id
    inner join artist
    on artist_song.artist_id = artist.id
  ` as {id: string, song_name: string, artist_name: string} []


  let songData:any = {}

  songs.forEach(o => {
    if(songData[o.id]) {
      songData[o.id].artist_name.push(o.artist_name)
    }else {
      songData[o.id] =  {song_name: o.song_name, artist_name: [o.artist_name]}
    }
  })

  return {
    pages: numberOfPages,
    items: numberOfItems,
    data: data.map(o => ({...o , ...songData[o.song_id]}))
  }
}

/**
 * Get song history statics of user using user.id
 */
async function getUserSongHistoryStats(id: number, filters: userHistorySummaryBody) {
  let totalSongs = await prisma.$queryRaw`
    SELECT count(song_id) as count FROM history
    where history.played_at >= ${filters.dateFrom} and
    history.played_at <= ${filters.dateTo}
  `  as {count: bigint}[]
  
  let totalSongCount = totalSongs[0].count.toString()

  let numItems = await prisma.$queryRaw`
    SELECT count(distinct song.id) as count FROM history
    join song
    ON song.id = history.song_id
    join artist_song
    ON artist_song.song_id = history.song_id
    join artist
    ON artist_song.artist_id = artist.id
    where history.played_at >= ${filters.dateFrom} and
    history.played_at <= ${filters.dateTo}
  ` as {count: bigint}[]

  if(!numItems.length || numItems[0].count == null) throw new RouteError(
    HttpStatusCodes.INTERNAL_SERVER_ERROR,
    'Internal error',
  ) 
  let count = numItems[0].count.toString()

  let songHistory = await prisma.$queryRaw`
    SELECT history.song_id as songId, song.name as songName, artist.id as artistId, artist.name as artistName, count(history.played_at) as count FROM history
    join song
    ON song.id = history.song_id
    join artist_song
    ON artist_song.song_id = history.song_id
    join artist
    ON artist_song.artist_id = artist.id
    where history.played_at >= ${filters.dateFrom} and
    history.played_at <= ${filters.dateTo}
    group by history.song_id, artist.id, song.name
    order by count desc
    limit ${filters.pageSize}
    offset ${pagination(filters.page, filters.pageSize)}
  ` as {name: string, id: string, count: BigInt}[]

  return {
    pages: Math.round(Number(count) / filters.pageSize),
    totalCount: totalSongCount,
    items: count,
    data: songHistory.map(o => ({...o, count: o.count.toString()})),

  }
}

/**
 * Get artist history statistics of a user using user.id
 */
async function getUserArtistHistoryStats(id: number, filters: userHistorySummaryBody) {
  let numItems = await prisma.$queryRaw`
    SELECT count(distinct artist_id) as count FROM history
    inner join song
    ON song.id = history.song_id
    inner join artist_song
    ON artist_song.song_id = song.id
    inner join artist
    ON artist.id = artist_song.artist_id
    where history.played_at >= ${filters.dateFrom} and
    history.played_at <= ${filters.dateTo}
  ` as {count: bigint}[]

  if(!numItems.length || numItems[0].count == null) throw new RouteError(
    HttpStatusCodes.INTERNAL_SERVER_ERROR,
    'Internal error',
  ) 
  let count = numItems[0].count.toString()


  let artistHistory = await prisma.$queryRaw`
    SELECT artist.name, artist.id, count(history.played_at) as count FROM history
    inner join song
    ON song.id = history.song_id
    inner join artist_song
    ON artist_song.song_id = song.id
    inner join artist
    ON artist.id = artist_song.artist_id
    where history.played_at >= ${filters.dateFrom} and
    history.played_at <= ${filters.dateTo}
    group by artist.id
    order by count desc
    limit ${filters.pageSize}
    offset ${pagination(filters.page, filters.pageSize)}
  ` as {name: string, id: string, count: BigInt}[]

  return {
    pages: Math.round(Number(count) / filters.pageSize),
    items: count,
    data: artistHistory.map(o => ({...o, count: o.count.toString()})),
  }
}


// **** Export default **** //

export default {
  getAll,
  updateOne,
  getUserByUsername,
  register,
  getUserHistory,
  getUserSongHistoryStats,
  getUserArtistHistoryStats
} as const;
