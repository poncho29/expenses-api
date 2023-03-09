import boom from "@hapi/boom"

function validatorHandler(schema: any, property: string) {
  return (req: any, res: any, next: any) => {
    const data = req[property]
    const { error } = schema.validate(data)
    if (error) {
      next(boom.badRequest(error))
    }
    next()
  }
}

export { validatorHandler }
