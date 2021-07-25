import { Express, NextFunction, Request, Response, Router } from 'express'
import ProductsService from '../../services/resources/products'
import HttpResponse from '../../network/response'

const router = Router()

/**
 * Set all CRUD endpoints for the resource.
 *
 * @param app - Express application.
 */
const products = (app: Express): void => {
  // create
  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body
      const result = await ProductsService.create(data)

      HttpResponse.success(res, result, 201)
    } catch (err) {
      next(err)
    }
  })

  // read all
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await ProductsService.read()

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
        const result = await ProductsService.find(id)

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
        const result = await ProductsService.update(id, data)

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
        const result = await ProductsService.update(id, data)

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
        const result = await ProductsService.delete(id)

        HttpResponse.success(res, result)
      } catch (err) {
        next(err)
      }
    }
  )

  app.use('/api/products', router)
}

export default products
