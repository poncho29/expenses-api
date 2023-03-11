import { NextFunction, Request, Response } from "express"
import boom from "@hapi/boom"
import bcrypt from "bcrypt"

const checkApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['api']

  if (apiKey === '123') {
    next()
  } else {
    next(boom.unauthorized())
  }
}

const hashPassword = async () => {
  const pass = '12345'
  const hash = await bcrypt.hash(pass, 10)
  console.log(hash)
}

const verifyPassword = async () => {
  const pass = '12345'
  const hash = ''
  const isMatch = await bcrypt.compare(pass, hash)
  console.log(isMatch)
}

export { checkApiKey }
