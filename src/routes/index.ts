import express, { Application } from "express"

import usersRouter from './users'
import spacesRouter from './spaces.route'

function routerApi(app: Application) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/users', usersRouter)
  router.use('/spaces', spacesRouter)
}

export default routerApi
