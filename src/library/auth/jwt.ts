import { IReq, IRes } from "@src/routes/types/types"
import { NextFunction } from "express"
import jwt from "jsonwebtoken"
import constants from "@src/constants/EnvVars"
import { findUser } from "../db/user"
import crypto from "crypto"
import { randomString } from "../utils"
import { findToken } from "../db/token"
import { tokenStatus } from "@src/models/Token"


export type tokenPayload = {
    username: string
}

const generateAccessToken = (username: string) => {
    console.log(constants.Refresh.Exp)

    let token = jwt.sign({username}, constants.Jwt.Secret, { expiresIn: constants.Jwt.Exp})

    let verify = jwt.decode(token, {json: true})
    let bearerData = {
        type: "Bearer",
        token: token,
        expiresIn: verify?.exp
    }

    return bearerData
}

const generateRefreshToken = () => {
    let randString = randomString()
    let token = jwt.sign({randString}, constants.Refresh.Secret, { expiresIn: constants.Refresh.Exp})

    let verify = jwt.decode(token, {json: true})
    let bearerData = {
        token: token,
        expiresIn: verify?.exp as number
    }

    return bearerData
}
const authenticateRefreshToken = async (refreshToken: string) => {
    try {
        const token = refreshToken
    
        if (token == null) return {
            success: false,
            message: "Please supply refresh token"
        }
    
        let data = await jwt.verify(token, constants.Refresh.Secret, {complete: true})

        let dbToken = await findToken(token)

        if(!dbToken || !dbToken.username) return {
            success: false,
            message: "Invalid refresh token"
        }

        if(dbToken.status == tokenStatus.revoked) return {
            success: false,
            message: "Invalid refresh token"
        }

        let user = await findUser(dbToken.username)


        return {
            success: true,
            user,
            dbToken
        }
       
    } catch (err) {
        console.log('invalid error', err)

        return {
            success: false,
            message: "Invalid refresh token"
        }
    }
}

const authenticateAccessToken = async (req: IReq, res: IRes, next: NextFunction) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
    
        if (token == null) return res.sendStatus(401)
    
        let data = jwt.verify(token, constants.Jwt.Secret, {complete: true})
        let payload = data.payload as tokenPayload
        if(!payload.username)  return res.sendStatus(401)

        let user = await findUser(payload.username)

        if(!user) return res.sendStatus(401)

        req.user = user

        return next()
       
    } catch (err) {
        console.log(err)

        return res.sendStatus(401)
    }
}

export default {
    generateAccessToken,
    authenticateAccessToken,
    generateRefreshToken,
    authenticateRefreshToken
}