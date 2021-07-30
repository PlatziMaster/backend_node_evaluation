import { NextFunction, Request, Response, Router } from 'express'
import { StoreService } from '../../../types'
import HttpResponse from '../../../network/response'

/**
 * Generate an endpoint to update all props in a resource.
 *
 * @param router - Instance of an express router.
 * @param service - Service to connect with the database.
 */
export const replace = (router: Router, service: StoreService): void => {
  router.put(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params.id
        const data = req.body
        const result = await service.update(id, data)

        HttpResponse.success(res, result)
      } catch (err) {
        next(err)
      }
    }
  )
}
