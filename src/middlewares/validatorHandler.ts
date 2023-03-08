import Boom from "boom";
import { NextFunction, Request, Response } from "express";

function validatorHandler(
  schema: any,
  property: string
) {
  return (req: Request, res: Response, next: NextFunction) => {
    // const data = req[property]
    const error = schema.validate()
    if (error) {
      next(Boom.badRequest(error))
    }
    next()
  }
}

export { validatorHandler }
