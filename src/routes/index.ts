import { Application } from "express"

import usersRouter from './users'
import spacesRouter from './spaces'

function routerApi(app: Application) {
  app.use('/users', usersRouter),
  app.use('/spaces', spacesRouter)
}

export default routerApi
