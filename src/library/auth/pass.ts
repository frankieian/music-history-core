
import * as argon2 from "argon2"

export const generateArgonHash = (pass: string) => {
    return argon2.hash(pass)
}

export const verifyPassword = (pass: string, hash: string) => {
    return argon2.verify(hash, pass)
}