import * as crypto from "crypto"

export const randomString = () => {
    return crypto.randomBytes(64).toString('hex');
}