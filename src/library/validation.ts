/**
 * 
 * Validates the request body to make sure the fields are correct
 * 
 */

import HttpStatusCodes from "@src/constants/HttpStatusCodes";
import { RouteError } from "@src/other/classes";
import { USER_NOT_FOUND_ERR } from "@src/routes/functions/UserFunctions";
import { IRes } from "@src/routes/types/express/misc";
import { IReq } from "@src/routes/types/types";
import { NextFunction } from "express";
import { ZodSchema } from "zod";

export const validateBody = (schema: ZodSchema) => {

    return (req: IReq<any>,res:IRes, next: NextFunction) => {
        let parseData = schema.safeParse(req.body)

        if(!parseData.success) {
            throw new RouteError(
                HttpStatusCodes.BAD_REQUEST,
                JSON.stringify(parseData.error.flatten())
            );
        }
        
        req.body = parseData.data

        return next()
    }

}

