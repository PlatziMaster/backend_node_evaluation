/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
import HttpResponse from '../../network/response'

dotenv.config()

/**
 * Capture any error and wrap it into an http response.
 *
 * @param err - Type error object.
 * @param req - Client request.
 * @param res - Server response.
 * @param next - Call next middleware function.
 */
export const errorsHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (process.env.NODE_ENV === 'production') {
    delete err.stack
  }

  HttpResponse.error(err, res)
}
