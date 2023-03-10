import express, { Application } from "express"

import usersRouter from './users.route'
import spacesRouter from './spaces.route'
import categoriesRouter from './categories.route'

function routerApi(app: Application) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/users', usersRouter)
  router.use('/spaces', spacesRouter)
  router.use('/categories', categoriesRouter)
}

export default routerApi
