import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import UserFunctions from '@src/routes/functions/UserFunctions';
import { IUser } from '@src/models/User';
import { IReq, IRes } from '@src/routes/types/types';
import { generateRandomString } from '@src/util/misc';

import { URLSearchParams } from 'url';
import axios from "axios"
import { editUserBody, registerUserBody, userHistoryRequest } from '../types/user/request';
import { RouteError } from '@src/other/classes';
import { generateArgonHash } from '@src/library/auth/pass';


// **** Service Methods **** //


async function register(req: IReq<{user: registerUserBody}>, res: IRes) {
  const { user } = req.body;
  const db = await UserFunctions.register(user)

  return res.status(HttpStatusCodes.OK).json({ db });
}

/**
 * Get all users.
 */
async function getAll(_: IReq, res: IRes) {
  const users = await UserFunctions.getAll();
  return res.status(HttpStatusCodes.OK).json({ users });
}

/**
 * Gets user by username
 */
async function getUserByUsername(req: IReq, res: IRes) {
  let username = req.user?.username

  if(!username) throw new RouteError(HttpStatusCodes.BAD_REQUEST, "Invalid User")

  const user = await UserFunctions.getUserByUsername(username);
  return res.status(HttpStatusCodes.OK).json(user);
}


/**
 * Update one user.
 */
async function update(req: IReq<editUserBody>, res: IRes) {
  if(!req.user) throw new RouteError(HttpStatusCodes.BAD_REQUEST, "Invalid User")
  await UserFunctions.updateOne(req.user, req.body);
  return res.status(HttpStatusCodes.OK).end();
}

/**
 * Gets history of user by username
 */
async function getUserOwnHistory(req: IReq<userHistoryRequest>, res:IRes) {
  let id = req.user?.id

  if(!id) throw new RouteError(HttpStatusCodes.BAD_REQUEST, "Invalid User")

  let history = await UserFunctions.getUserHistory(id, req.body)

  return res.status(HttpStatusCodes.OK).json(history)

}

/**
 * Gets history summary by username
 */
async function getUserHistorySummary(req: IReq<userHistoryRequest>, res:IRes) {
  let id = req.user?.id

  if(!id) throw new RouteError(HttpStatusCodes.BAD_REQUEST, "Invalid User")

  let history = await UserFunctions.getUserSongHistoryStats(id, req.body)

  return res.status(HttpStatusCodes.OK).json(history)

}

/**
 * Gets history summary by username
 */
async function getUserArtistHistorySummary(req: IReq<userHistoryRequest>, res:IRes) {
  let id = req.user?.id

  if(!id) throw new RouteError(HttpStatusCodes.BAD_REQUEST, "Invalid User")

  let history = await UserFunctions.getUserArtistHistoryStats(id, req.body)

  return res.status(HttpStatusCodes.OK).json(history)

}


// **** Export default **** //

export default {
  getAll,
  getUserByUsername,
  update,
  register,
  getUserOwnHistory,
  getUserHistorySummary,
  getUserArtistHistorySummary
} as const;
