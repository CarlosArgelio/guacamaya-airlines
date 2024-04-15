import Joi from 'joi'

const email = Joi.string().email()
const oneWay = Joi.boolean() // Solo ida
const roundTrip = Joi.boolean() // Ida y vuelta
const from = Joi.string()
const to = Joi.string()
const dateStart = Joi.date().timestamp()
const dateEnd = Joi.date().timestamp()
const adults = Joi.number().min(1).max(10)
const children = Joi.number().min(0).max(10)

export const createReservation = Joi.object({
  email: email.required(),
  oneWay: oneWay.required(),
  roundTrip: roundTrip.required(),
  from: from.required(),
  to: to.required(),
  dateStart: dateStart.required(),
  dateEnd: dateEnd.required(),
  people: Joi.object({
    adults: adults.required(),
    children: children.required(),
  }),
})
