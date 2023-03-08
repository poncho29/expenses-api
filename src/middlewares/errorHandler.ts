import { Boom } from "@hapi/boom";
import { NextFunction, Request, Response } from "express"

function logErrors (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error)
  next(error)
}

function errorHandler (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  });
}

function boomErrorHandler (
  error: Boom,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.isBoom) {
    const { output } = error
    res.status(output.statusCode).json(output.payload)
  }

  next(error)
}

export {
  logErrors,
  errorHandler,
  boomErrorHandler
}
