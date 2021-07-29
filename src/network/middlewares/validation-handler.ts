import { NextFunction, Request, Response } from 'express'
import { Schema, ValidationError } from 'joi'
import { Document } from 'mongodb'

const validate = (
  schema: Schema,
  data: Document
): ValidationError | undefined => {
  const { error } = schema.validate(data)

  return error
}

export const validationHandler = (schema: Schema, check = 'body') => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // next line solve the use of string as index
    // credits to: Guillaume F.
    // https://stackoverflow.com/questions/62438346/how-to-dynamically-access-object-property-in-typescript
    const key = check as keyof typeof req
    const err = validate(schema, req[key])

    err ? next(err) : next()
  }
}
