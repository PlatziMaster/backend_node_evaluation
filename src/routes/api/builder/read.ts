import { NextFunction, Request, Response, Router } from 'express'
import { StoreService } from '../../../types'
import HttpResponse from '../../../network/response'

const read = (router: Router, service: StoreService): void => {
  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await service.read()

      HttpResponse.success(res, result)
    } catch (err) {
      next(err)
    }
  })
}

export default read
