import { NextFunction, Request, Response, Router } from 'express'
import { validationHandler } from '../../../network/middlewares'
import HttpResponse from '../../../network/response'
import { Model, StoreService } from '../../../types'

/**
 * Generate an endpoint to delete a resource.
 *
 * @param router - Instance of an express router.
 * @param service - Service to connect with the database.
 * @param model - Is a resource abstraction.
 */
export const erase = (
  router: Router,
  service: StoreService,
  model: Model
): void => {
  router.delete(
    '/:id',
    validationHandler(model.identification, 'params'),
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
