import { Prisma, PrismaClient } from "@prisma/client";
import { loginRequest } from "../types/auth/request";
import { prisma } from "@src/constants/db";
import { RouteError } from "@src/other/classes";
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import { verifyPassword } from "@src/library/auth/pass";
import jwt from "@src/library/auth/jwt";
import { createToken, editToken } from "@src/library/db/token";
import { generateRandomString } from "@src/util/misc";
import axios from "axios";
import { UserRoles } from "@src/models/User";
import UserModel from "@src/models/User"

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

export const spotifyLogin = async(code: string) => {
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

        if(!response.data?.access_token || !response.data?.refresh_token) {
            return {success: false, error: "could not get token from spotify"}
        }

        let spotifyUser = await axios.request({
            method: "GET",
            url: 'https://api.spotify.com/v1/me',
            headers: {
                "Authorization": "Bearer " + response.data.access_token
            }
        })
        console.log('spotifyUser', spotifyUser.data)

        if(!spotifyUser.data?.id || !spotifyUser.data?.email) {
            return {success: false, error: "could not get user data"}
        }

        let spotifyData = {
            access_token: response.data?.access_token,
            refresh_token: response.data?.refreshToken,
            email: spotifyUser.data.email,
            id: spotifyUser.data.id,
            displayName: spotifyUser.data.display_name
        }


        //Check integration
        let integration = await prisma.integration.findFirst({
            where: {
                id: spotifyData.id
            }
        })

        if(integration && integration.user_id) {
            //Update refresh token
            await prisma.integration.update({
                data: {
                    refresh_token: spotifyData.refresh_token,
                    status: 'active'
                },
                where: { 
                    id_provider: {
                        id: spotifyData.id,
                        provider: 'spotify'
                    }
                }
            })
            //Get user
            let user = await prisma.user.findFirst({
                where: { 
                    id: integration.user_id
                }
            })

            //Update email
            if(user?.email != spotifyData.email) {
                 await prisma.user.update({
                    data: {
                        email: spotifyData.email,
                        username: spotifyData.email,
                    },
                    where: { 
                        id: integration.user_id
                    }
                })

            }
            //Generate bearer token
            let bearerToken = await jwt.generateAccessToken(spotifyData.email)

            //Generate refresh token
            let refreshToken = await jwt.generateRefreshToken()
            await createToken(refreshToken.token, refreshToken.expiresIn, spotifyData.email)

            return {success: true, bearerToken, refreshToken}


        } else {
            //Register
            let data = {
                username: spotifyData.email,
                firstName: spotifyData.displayName,
                lastName: '',
                email: spotifyData.email,
                role: UserRoles.Standard,
                pwdHash: '',
              }
            
              let userData = UserModel.new(data)
            
            
              const dbUser = await prisma.user.create({
                data: userData
              })
              //Generate bearer token
            let bearerToken = await jwt.generateAccessToken(spotifyData.email)

            //Generate refresh token
            let refreshToken = await jwt.generateRefreshToken()
            await createToken(refreshToken.token, refreshToken.expiresIn, spotifyData.email)

            return {success: true, bearerToken, refreshToken}
        }

    } catch(err) {
        console.log(err)
        return  {success: false, error: "could not get token from spotify"}
    }
}


export default {
    refreshToken,
    revokeToken,
    spotifyLogin
}