import { NextFunction, Request, Response, Router } from 'express'
import { StoreService } from '../../../types'
import HttpResponse from '../../../network/response'

/**
 * Generate an endpoint to read all resources.
 *
 * @param router - Instance of an express router.
 * @param service - Service to connect with the database.
 */
export const read = (router: Router, service: StoreService): void => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await service.read()

      HttpResponse.success(res, result)
    } catch (err) {
      next(err)
    }
  })
}
