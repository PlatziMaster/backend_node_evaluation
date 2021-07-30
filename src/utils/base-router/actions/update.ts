import { NextFunction, Request, Response, Router } from 'express'
import { validationHandler } from '../../../network/middlewares'
import HttpResponse from '../../../network/response'
import { Model, StoreService } from '../../../types'

/**
 * Generate an endpoint to update some props in a resource.
 *
 * @param router - Instance of an express router.
 * @param service - Service to connect with the database.
 * @param model - Is a resource abstraction.
 */
export const update = (
  router: Router,
  service: StoreService,
  model: Model
): void => {
  router.patch(
    '/:id',
    validationHandler(model.identification, 'params'),
    validationHandler(model.update),
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
