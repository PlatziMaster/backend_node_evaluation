import { NextFunction, Request, Response, Router } from 'express'
import { StoreService } from '../../../types'
import HttpResponse from '../../../network/response'

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
