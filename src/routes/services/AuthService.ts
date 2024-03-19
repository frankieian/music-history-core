import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import AuthFunctions from '@src/routes/functions/AuthFunctions';
import { IReq, IRes } from '../types/express/misc';
import { loginRequest } from '../types/auth/request';
import jwt from '@src/library/auth/jwt';
import { editToken } from '@src/library/db/token';
import { generateRandomString } from '@src/util/misc';
import axios from 'axios';

async function refreshToken(req:IReq, res: IRes) {
    console.log("req.headers", req.headers)
    let refreshToken = req.cookies["music_history_refresh"]
    let bearerToken = await AuthFunctions.refreshToken(refreshToken)

    return res.status(HttpStatusCodes.OK).json(bearerToken);
}

async function revokeToken(req: IReq, res: IRes) {
    let refreshToken = req.cookies["music_history_refresh"]

    let data = await AuthFunctions.revokeToken(refreshToken)

    return res.status(HttpStatusCodes.OK).json(data);
}

/**
 * Authorize spotify user to app
 */
async function spotifyAuth(req: IReq, res: IRes) {
    let body:any = req.body
    var code = body.code || null;
    var state = body.state || null;

    if (state === null) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json()
    } else {
        let data = await AuthFunctions.spotifyLogin(code)
        console.log(data)
        if(!data.success) return res.status(HttpStatusCodes.BAD_REQUEST).json(data)
        return res.status(HttpStatusCodes.OK).json(data);
    }
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

        //If code is not valid, then redirect 

        return res.status(HttpStatusCodes.OK).json(response.data);
      } catch(err) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json(err)
      }
    }
}
  
  


export default {
    refreshToken,
    revokeToken,
    spotifyAuth,
    spotifyCallback
}