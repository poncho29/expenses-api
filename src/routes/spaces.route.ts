import { Router } from "express"

import { validatorHandler } from "../middlewares/validatorHandler"
import { getOne, getAll, create, update, remove } from "../controllers/spaces"
import { getSpaceSchema, createSpaceSchema, updateSpaceSchema } from "../schemas/space.schema"

const router = Router()

router.get(
  '/:id',
  validatorHandler(getSpaceSchema, 'params'),
  getOne
)

router.get('/', getAll)

router.post(
  '/',
  validatorHandler(createSpaceSchema, 'body'),
  create
)

router.put(
  '/:id',
  validatorHandler(getSpaceSchema, 'params'),
  validatorHandler(updateSpaceSchema, 'body'),
  update
)

router.delete(
  '/:id',
  validatorHandler(getSpaceSchema, 'params'),
  remove
)

export default router
