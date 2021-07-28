import { NextFunction, Request, Response, Router } from 'express'
import { StoreService } from '../../../types'
import HttpResponse from '../../../network/response'

const replace = (router: Router, service: StoreService): void => {
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

export default replace
