import { NextFunction, Request, Response, Router } from 'express'
import { StoreService } from '../../../types'
import HttpResponse from '../../../network/response'

const erase = (router: Router, service: StoreService): void => {
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

export default erase
