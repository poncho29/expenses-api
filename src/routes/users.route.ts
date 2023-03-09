import { Router} from "express"

import { validatorHandler } from '../middlewares/validatorHandler'
import {getOne, getAll, create, update,remove} from "../controllers/users.controller"
import { getUserSchema, createUserSchema, updateUserSchema } from '../schemas/user.schema'

const router = Router()

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  getOne
)

router.get('/', getAll)

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  create
)

router.put(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  update
)

router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  remove
)

export default router
