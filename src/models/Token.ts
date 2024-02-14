import { Prisma } from "@prisma/client";
import { randomString } from "@src/library/utils";



export enum tokenStatus {
    active = 0,
    revoked = 1,
  }
  
function new_(data: {
    token: string,
    created_at?: string,
    expiry: Date,
    status?: tokenStatus,
    device_id?: string
    username: string
}): Prisma.tokenCreateInput {
    return {
        username: data.username,
        token: data.token,
        expiry: data.expiry,
        status: (data.status ?? tokenStatus.active),
        created_at: (data.created_at ?? new Date()),
        device_id: (data.device_id ?? randomString())
    };
}
  

export default {
new: new_,
tokenStatus
}