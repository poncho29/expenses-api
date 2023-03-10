import { Router } from "express"

import { validatorHandler } from "../middlewares/validatorHandler"
import { create, getAll, getOne, remove, update } from "../controllers/categories.controller"
import { getCategorySchema, createCategorySchema, updateCategorySchema } from "../schemas/category.schema"

const router = Router()

router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  getOne
)

router.get('/', getAll)

router.post(
  '/',
  validatorHandler(createCategorySchema, 'body'),
  create
)

router.put(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  update
)

router.delete(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  remove
)

export default router
