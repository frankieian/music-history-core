import HttpStatusCodes from "@src/constants/HttpStatusCodes"
import { prisma } from "@src/constants/db"
import { RouteError } from "@src/other/classes"


//Create User




//Find User
export const findUser = async (username: string) => {
    let user = await prisma.user.findMany({
        where: {
            username: username
        }
    })

    return user[0]
}


//Find user 