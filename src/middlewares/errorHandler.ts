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

export { logErrors, errorHandler }
