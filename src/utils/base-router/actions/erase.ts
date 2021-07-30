import { NextFunction, Request, Response, Router } from 'express'
import { StoreService } from '../../../types'
import HttpResponse from '../../../network/response'

/**
 * Generate an endpoint to delete a resource.
 *
 * @param router - Instance of an express router.
 * @param service - Service to connect with the database.
 */
export const erase = (router: Router, service: StoreService): void => {
  router.delete(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params.id
        const result = await service.delete(id)

        HttpResponse.success(res, result)
      } catch (err) {
        next(err)
      }
    }
  )
}
