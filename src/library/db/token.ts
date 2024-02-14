import { Prisma, token } from "@prisma/client"
import db from "@src/constants/db"
import mToken, { tokenStatus } from "@src/models/Token"

export const findToken = async (t: string) => {

    let token = await db.prisma.token.findFirst({
        where: {
            token: t
        }
    })
    return token

}

export const createToken = async (t: string, expiry: number, username: string) => {
    let expiryDate = new Date(expiry * 1000)

    let data = {
        token: t,
        expiry: expiryDate,
        username
    }

    let tokenDoc = mToken.new(data)

    await db.prisma.token.create({
        data: tokenDoc
    })

}


export const editToken = async (id: number) => {

    await db.prisma.token.update({
        where: {
            id
        },
        data: {
            status: tokenStatus.revoked
        }
    })
}