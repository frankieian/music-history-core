import { Router } from 'express';

import Paths from '../constants/Paths';
import User, { UserRoles } from '@src/models/User';
import UserService from './services/UserService';
import { PrismaClient } from '@prisma/client';
import { validateBody } from '@src/library/validation';
import * as schema from './types/user/request';
import jwt from '@src/library/auth/jwt';
import { validateRole } from '@src/library/auth/role';

// ** UserRouter ** //

const userRouter = Router();

//TODO enable cloudflare turnstile to prevent bots and spam
//https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/
userRouter.post(
  Paths.User.Register,
  validateBody(schema.registerUserRequestSchema),
  validateRole(UserRoles.Admin),
  UserService.register
)

//Admin Paths
// Get all users
userRouter.get(
  Paths.User.GetAll,
  jwt.authenticateAccessToken,
  validateRole(UserRoles.Admin),
  UserService.getAll,
);

//Get specific items
//Get History
userRouter.get(
  Paths.User.History,
  jwt.authenticateAccessToken,
  validateRole(),
  validateBody(schema.userHistoryRequestSchema),
  UserService.getUserOwnHistory
)
//Get Song Stats
userRouter.get(
  Paths.User.SongStats,
  jwt.authenticateAccessToken,
  validateRole(),
  validateBody(schema.userHistoryRequestSchema),
  UserService.getUserHistorySummary
)
//Get Artist Stats
userRouter.get(
  Paths.User.ArtistStats,
  jwt.authenticateAccessToken,
  validateRole(),
  validateBody(schema.userHistoryRequestSchema),
  UserService.getUserArtistHistorySummary
)

//User Paths
//Get user
userRouter.get(
  Paths.User.Get,
  jwt.authenticateAccessToken,
  validateRole(),
  UserService.getUserByUsername,
);



//Update user
userRouter.patch(
  Paths.User.Update,
  jwt.authenticateAccessToken,
  validateRole(),
  validateBody(schema.editUserRequestSchema),
  UserService.update,
);


//Get profile



// **** Export default **** //

export default userRouter;
