import Joi from "joi";

const id = Joi.number().integer()
const name = Joi.string().max(255)
const email = Joi.string().email()
const phone = Joi.number().integer()
const password = Joi.string()

const getUserSchema = Joi.object({
  id: id.required()
})

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  phone: phone,
  password: password.required()
})

const updateUserSchema = Joi.object({
  name: name,
  phone: phone,
  password: password
})

export {
  getUserSchema,
  createUserSchema,
  updateUserSchema
}
