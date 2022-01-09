import { Request, Response, NextFunction } from 'express'

/**
 * Capture any error and logged it.
 *
 * @param err - Type error object.
 * @param req - Client request.
 * @param res - Server response.
 * @param next - Call next middleware function.
 */
export const logErrors = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack)

  next(err)
}
