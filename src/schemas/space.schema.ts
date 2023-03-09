import Joi from "joi";

const id = Joi.number().integer()
const name = Joi.string().max(255)
const color = Joi.string()
const total = Joi.number()
const totalExpenses = Joi.number()
const totalRevenue = Joi.number()

const getSpaceSchema = Joi.object({
  id: id.required()
})

const createSpaceSchema = Joi.object({
  name: name.required(),
  color: color,
  total: total,
  totalExpenses: totalExpenses,
  totalRevenue: totalRevenue
})

const updateSpaceSchema = Joi.object({
  name: name,
  color: color,
  total: total,
  totalExpenses: totalExpenses,
  totalRevenue: totalRevenue
})

export {
  getSpaceSchema,
  createSpaceSchema,
  updateSpaceSchema
}
