import { NextFunction, Request, Response, Router } from 'express'
import { validationHandler } from '../../network/middlewares'
import HttpResponse from '../../network/response'
import { Model, StoreService } from '../../types'

/**
 * Generate an endpoint to create a resource.
 *
 * @param router - Instance of an express router.
 * @param service - Service to connect with the database.
 */
const create = (router: Router, service: StoreService, model: Model): void => {
  router.post(
    '/',
    validationHandler(model.creation),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const data = req.body
        const result = await service.create(data)

        HttpResponse.success(res, result, 201)
      } catch (err) {
        next(err)
      }
    }
  )
}

export default create
