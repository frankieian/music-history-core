/**
 * Miscellaneous shared classes go here.
 */

import HttpStatusCodes from '@src/constants/HttpStatusCodes';


/**
 * Error with status code and message
 */
export class RouteError extends Error {

  public status: HttpStatusCodes;
  public error: any;

  public constructor(status: HttpStatusCodes, message: string, error?: any) {
    super(message);
    this.status = status;
    this.error = JSON.stringify(error)
  }
}
