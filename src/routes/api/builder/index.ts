import { Express, NextFunction, Request, Response, Router } from 'express'
import { ResourceService } from '../../../types'
import HttpResponse from '../../../network/response'

const router = Router()

/**
 * Generate all endpoints for basic CRUD.
 *
 * @param app - Express application.
 * @param resource - Name of the resource.
 * @param service - Intance of the resource service.
 */
const builder = (
  app: Express,
  resource: string,
  service: ResourceService
): void => {
  // create
  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const result = await service.create(data)

      HttpResponse.success(res, result, 201)
    } catch (err) {
      next(err)
    }
  })

  // read all
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await service.read()

      HttpResponse.success(res, result)
    } catch (err) {
      next(err)
    }
  })

  // read one
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

  // entire update
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

  // partial update
  router.patch(
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

  // delete
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

  app.use(`/api/${resource}`, router)
}

export default builder
