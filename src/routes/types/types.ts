import { users } from '@prisma/client';
import * as e from 'express';
import { Query } from 'express-serve-static-core';


// **** Express **** //

export interface IReq<T = any> extends e.Request {
  body: T;
  user?: users
}

export interface IReqQuery<T extends Query, U = void> extends e.Request {
  query: T;
  body: U;
}

export interface IRes extends e.Response {
  locals: {
  };
}
