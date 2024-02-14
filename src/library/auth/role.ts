import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { UserRoles } from "@src/models/User";
import { RouteError } from "@src/other/classes";
import { IReq, IRes } from "@src/routes/types/types";
import { NextFunction } from "express";
import { findUser } from "../db/user";

/**
 * Validates the user role. 
 * @param role 
 * @returns 
 */
export const validateRole = (role?: UserRoles | UserRoles[]) => {
    let validRole: string | string[] = role ?? [UserRoles.Standard, UserRoles.Admin]

    return async (req: IReq, res: IRes, next: NextFunction) =>  {
        let user = req.user
        console.log("Validating role")

        if(!user) return res.sendStatus(401)

        if(typeof validRole == "object") {
            if(!user.role || !validRole.find(o => o == user?.role)) return res.sendStatus(401)
        } else {
            if(validRole != user.role ) return res.sendStatus(401)
        }
        console.log("Validated role")

        return next()


    }


}