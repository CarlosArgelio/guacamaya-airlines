import { NextFunction, Request, Response, Router } from 'express'
import { ReservationController } from '../controllers'
import { success, schemaHandler } from './../middlewares'
import { Properties } from './../middlewares'
import { Schemas } from './../schemas'

export const reserver = Router()

const create = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body
  try {
    const controller = new ReservationController()
    const newReserver = controller.create(data)
    success(req, res, newReserver, 201)
  } catch (error) {
    next(error)
  }
}

reserver.post(
  '/',
  schemaHandler(Schemas.CREATE_RESERVATION_SCHEMA, Properties.BODY),
  create,
)
