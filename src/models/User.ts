// **** Variables **** //

import { Prisma } from "@prisma/client";

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

export default {
  new: new_,
} as const;
