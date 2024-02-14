import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { IReq, IRes } from './types/express/misc';

import { URLSearchParams } from 'url';
import axios from "axios"
import { generateRandomString } from '@src/util/misc';
import { Router } from 'express';
import Paths from '@src/constants/Paths';
import AuthService from './services/AuthService';

const AuthRouter = Router()


//Login
AuthRouter.post(
  Paths.Auth.Login,
  AuthService.login
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



/**
 * Authorize spotify user to app
 */
async function spotifyAuth(req: IReq, res: IRes) {
    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email user-read-recently-played';
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
  
  