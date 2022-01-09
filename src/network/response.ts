import { Document } from 'mongodb'
import { Response } from 'express'

const HttpResponse = {
  success: (
    res: Response,
    data: Document | undefined,
    status?: number
  ): void => {
    const statusCode = status || 200

    res.status(statusCode).json({ data })
  },

  error: (err: Error, res: Response, status?: number): void => {
    const statusCode = status || 500

    res.status(statusCode).json({ error: err })
  },
}

export default HttpResponse
