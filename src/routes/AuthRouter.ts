import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';

import { URLSearchParams } from 'url';
import axios from "axios"
import { generateRandomString } from '@src/util/misc';
import { Router } from 'express';
import Paths from '@src/constants/Paths';
import AuthService from './services/AuthService';

const AuthRouter = Router()

//Spotify Login
AuthRouter.post(
  Paths.Auth.Spotify,
  AuthService.spotifyAuth
)

//Spotify Login Callback
AuthRouter.get(
  Paths.Auth.SpotifyCallback,
  AuthService.spotifyCallback
)


//Refresh Token
AuthRouter.post(
  Paths.Auth.RefreshToken,
  AuthService.refreshToken
)


//Revoke token
AuthRouter.post(
  Paths.Auth.RevokeToken,
  AuthService.revokeToken
)


export default AuthRouter
