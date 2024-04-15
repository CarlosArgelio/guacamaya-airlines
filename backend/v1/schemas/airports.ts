import Joi from 'joi'

const id = Joi.string().uuid()
const name = Joi.string()

export const createAirPort = Joi.object({
  name: name.required(),
})

export const updateAirPort = Joi.object({
  name,
})

export const findId = Joi.object({
  id,
})
