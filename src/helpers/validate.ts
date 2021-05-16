import { NextFunction, Request, RequestHandler, RequestParamHandler, Response } from "express";
import joi from "joi";

export const validate = (data: object, schema: string) => {
  const { error } = joi.object(schema).validate(data);
  return error;
};

export const validationHandler = (schema: any, check = "body") => {
  return (req: any, res: Response, next: NextFunction) => {
    const error = validate(req[check], schema);

    error ? next(res.status(400).json(error.details)) : next();
  };
};