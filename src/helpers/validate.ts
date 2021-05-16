import { NextFunction, Request, Response } from "express";
import joi from "joi";

export const validate = (data: object, schema: string) => {
  const { error } = joi.object(schema).validate(data);
  return error;
};

export const validationHandler = (schema: any, check = "body") => {
  return (req: Request, res: Response, next: NextFunction) => {
    const error = validate(req.body || req.params, schema);

    error ? next(res.status(400).json(error.details)) : next();
  };
};