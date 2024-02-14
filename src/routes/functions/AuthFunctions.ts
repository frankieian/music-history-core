import { Prisma, PrismaClient } from "@prisma/client";
import { loginRequest } from "../types/auth/request";
import { prisma } from "@src/constants/db";
import { RouteError } from "@src/other/classes";
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { verifyPassword } from "@src/library/auth/pass";
import jwt from "@src/library/auth/jwt";
import { createToken, editToken } from "@src/library/db/token";


export const login = async (login: loginRequest) => {
    //Check user
    let user = await prisma.user.findFirst({
        where: {
            username: login.username
        }
    })

    console.log(user, login.username)

    if(!user) {
        throw new RouteError(
            HttpStatusCodes.BAD_REQUEST,
            "Invalid username or password"
        )
    }

    //Check password
    let passwordHash = user.pwdHash
    if(!passwordHash) {
        throw new RouteError(
            HttpStatusCodes.BAD_REQUEST,
            "Invalid username or password"
        )
    }

    let validPassword = await verifyPassword(login.password, passwordHash)

    if(!validPassword){
        throw new RouteError(
            HttpStatusCodes.BAD_REQUEST,
            "Invalid username or password"
        )
    }

    if(!user.username) throw new RouteError(
        HttpStatusCodes.BAD_REQUEST,
        "Invalid user, please try again"
    ) 

    //Generate bearer token
    let bearerToken = await jwt.generateAccessToken(user.username)

    //Generate refresh token
    let refreshToken = await jwt.generateRefreshToken()
    await createToken(refreshToken.token, refreshToken.expiresIn, user.username)

    return {bearerToken, refreshToken}

}

export const refreshToken = async (refreshToken: string) => {
    let data = await jwt.authenticateRefreshToken(refreshToken)

    if(!data.success || !data.user?.username) {
        throw new RouteError(
            HttpStatusCodes.FORBIDDEN,
            data.message ?? "Invalid refresh token"
        )
    }

    let bearerToken = await jwt.generateAccessToken(data.user.username)

    return bearerToken
}

export const revokeToken = async (refreshToken: string) => {
    let data = await jwt.authenticateRefreshToken(refreshToken)

    if(!data.success || !data.user?.username) {
        throw new RouteError(
            HttpStatusCodes.FORBIDDEN,
            data.message ?? "Invalid refresh token"
        )
    }
    await editToken(data.dbToken.id)

    return 'Successfully revoked'
}

export default {
    login,
    refreshToken,
    revokeToken
}