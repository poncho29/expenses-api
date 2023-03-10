import Joi from "joi";

const id = Joi.number().integer()
const name = Joi.string().max(255)
const type = Joi.number()

const getCategorySchema = Joi.object({
  id: id.required()
})

const createCategorySchema = Joi.object({
  name: name.required(),
  type: type.required()
})

const updateCategorySchema = Joi.object({
  name: name,
  type: type
})

export {
  getCategorySchema,
  createCategorySchema,
  updateCategorySchema
}
