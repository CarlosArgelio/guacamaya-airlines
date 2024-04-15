import Joi from 'joi'

const id = Joi.string().uuid()
const name = Joi.string()
const url = Joi.string().uri()

export const createDestination = Joi.object({
  name: name.required(),
  url: url.required(),
})

export const updateDestination = Joi.object({
  name,
  url,
})

export const findId = Joi.object({
  id,
})
