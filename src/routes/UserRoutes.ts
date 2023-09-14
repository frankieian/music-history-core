import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import UserService from '@src/services/UserService';
import { IUser } from '@src/models/User';
import { IReq, IRes } from './types/express/misc';
import { generateRandomString } from '@src/util/misc';

import { URLSearchParams } from 'url';
import axios from "axios"


// **** Functions **** //

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const users = await UserService.getAll();
  return res.status(HttpStatusCodes.OK).json({ users });
}

/**
 * Add one user.
 */
async function add(req: IReq<{user: IUser}>, res: IRes) {
  const { user } = req.body;
  await UserService.addOne(user);
  return res.status(HttpStatusCodes.CREATED).end();
}

/**
 * Update one user.
 */
async function update(req: IReq<{user: IUser}>, res: IRes) {
  const { user } = req.body;
  await UserService.updateOne(user);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Delete one user.
 */
async function delete_(req: IReq, res: IRes) {
  const id = +req.params.id;
  await UserService.delete(id);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Authorize spotify user to app
 */
async function spotifyAuth(req: IReq, res: IRes) {
  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID ?? '',
      scope: scope,
      redirect_uri: process.env.SPOTIFY_REDIRECT_UI ?? '',
      state: state
    }));
}

async function spotifyCallback(req: IReq, res: IRes) {
  var code = req.query.code || null;
  var state = req.query.state || null;

  if (state === null) {
    res.redirect('/#' +
      new URLSearchParams({
        error: 'state_mismatch'
      }));
  } else {
    let client_id = process.env.SPOTIFY_CLIENT_ID ?? ''
    let secret = process.env.SPOTIFY_CLIENT_SECRET ?? ''
    let data = new URLSearchParams({
      code: code as any,
      redirect_uri: process.env.SPOTIFY_REDIRECT_UI ?? '',
      grant_type: 'authorization_code',
      client_id: client_id,
      client_secret: secret
    })
    try{
      let response = await axios.request({
        method: "POST",
        url: 'https://accounts.spotify.com/api/token' ,
        params: data,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        }
      })
      console.log(response.data)
      return res.status(HttpStatusCodes.OK).json(response.data);
    } catch(err) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json(err)
    }
  }
}


// **** Export default **** //

export default {
  getAll,
  add,
  update,
  delete: delete_,
  spotifyAuth,
  spotifyCallback
} as const;
