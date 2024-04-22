import Joi from 'joi'

const email = Joi.string().email()
const oneWay = Joi.boolean() // Solo ida
const roundTrip = Joi.boolean() // Ida y vuelta
const from = Joi.string()
const to = Joi.string()
const adults = Joi.number().min(1).max(10)
const children = Joi.number().min(0).max(10)
const status = Joi.string().equal('CONFIRM', 'RECHAZED', 'WAIT')

export const createReservation = Joi.object({
  email: email.required(),
  oneWay: oneWay.required(),
  roundTrip: roundTrip.required(),
  from: from,
  to: to,
  dateStart: Joi.date().less(Joi.ref('dateEnd')).required(),
  dateEnd: Joi.date().required(),
  adults: adults.required(),
  children: children.required(),
})

export const confirmReservation = Joi.object({
  status: status.required(),
})
