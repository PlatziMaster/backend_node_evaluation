import { NextFunction, Request, Response, Router } from 'express'
import { StoreService } from '../../types'
import HttpResponse from '../../network/response'

/**
 * Generate an endpoint to read a resource.
 *
 * @param router - Instance of an express router.
 * @param service - Service to connect with the database.
 */
const find = (router: Router, service: StoreService): void => {
  router.get(
    '/:id',
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const id = req.params.id
        const result = await service.find(id)

        HttpResponse.success(res, result)
      } catch (err) {
        next(err)
      }
    }
  )
}

export default find
