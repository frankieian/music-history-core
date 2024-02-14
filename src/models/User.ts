// **** Variables **** //

import { Prisma } from "@prisma/client";
import { user } from "@prisma/client";

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an ' + 
  'object with the appropriate user keys.';

export enum UserRoles {
  Standard = 'standard',
  Admin = 'admin',
}


// **** Types **** //

export interface IUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
  email: string;
  pwdHash?: string;
  created_at: Date;
}

// **** Functions **** //


/**
 * Create new user
 */

function new_(data: {
  username?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  role?: UserRoles,
  pwdHash?: string,
  created_at?: Date,
  id?: number
}): Prisma.userCreateInput {
  return {
    ...(data.id ? {id: data.id} : {}),
    username: (data.username ?? ''),
    firstName: (data.firstName ?? ''),
    lastName: (data.lastName ?? ''),
    email: (data.email ?? ''),
    role: (data.role ?? UserRoles.Standard),
    pwdHash: (data.pwdHash ?? ''),
    created_at: (data.created_at ?? new Date())
  };
}

/**
 * Get user instance from object.
 */
//function from(param: object): IUser {
//  // Check is user
//  if (!isUser(param)) {
//    throw new Error(INVALID_CONSTRUCTOR_PARAM);
//  }
//  // Get user instance
//  const p = param as IUser;
//  //return new_(p.username, p.firstName, p.lastName, p.email, p.role, p.pwdHash, p.id, p.created_at);
//}

/**
 * See if the param meets criteria to be a user.
 */
function isUser(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg &&
    'email' in arg &&
    'name' in arg &&
    'role' in arg
  );
}


// **** Export default **** //

export default {
  new: new_,
  //from,
  isUser,
} as const;
