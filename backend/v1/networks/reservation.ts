import { NextFunction, Request, Response, Router } from 'express'
import { ReservationController } from '../controllers'
import { success, schemaHandler } from './../middlewares'
import { Properties } from '../middlewares'
import { createReservation, confirmReservation, findId } from './../schemas'

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

const update = (req: Request, res: Response, next: NextFunction) => {
  const { status } = req.body
  const { id } = req.params

  try {
    const controller = new ReservationController()
    const updated = controller.update(id, status)
    success(req, res, updated, 200)
  } catch (error) {
    next(error)
  }
}

reserver.post('/', schemaHandler(createReservation, Properties.BODY), create)
reserver.put(
  '/:id/confirm',
  schemaHandler(findId, Properties.PATH),
  schemaHandler(confirmReservation, Properties.BODY),
  update,
)
