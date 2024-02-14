import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import AuthFunctions from '@src/routes/functions/AuthFunctions';
import { IReq, IRes } from '../types/express/misc';
import { loginRequest } from '../types/auth/request';
import jwt from '@src/library/auth/jwt';
import { editToken } from '@src/library/db/token';

async function googleLogin(req: IReq<{}>, res: IRes) {
    //Check google token is valid
}
  

async function login(req:IReq<loginRequest>, res: IRes) {
    let body = req.body
    let {bearerToken, refreshToken} = await AuthFunctions.login(body)

    res.cookie("music_history_refresh", refreshToken.token, {maxAge: refreshToken.expiresIn})

    return res.status(HttpStatusCodes.OK).json(bearerToken);
}

async function refreshToken(req:IReq, res: IRes) {
    let refreshToken = req.cookies["music_history_refresh"]
    let bearerToken = await AuthFunctions.refreshToken(refreshToken)

    return res.status(HttpStatusCodes.OK).json(bearerToken);
}

async function revokeToken(req: IReq, res: IRes) {
    let refreshToken = req.cookies["music_history_refresh"]

    let data = await AuthFunctions.revokeToken(refreshToken)

    return res.status(HttpStatusCodes.OK).json(data);
}


export default {
    login,
    refreshToken,
    revokeToken
}