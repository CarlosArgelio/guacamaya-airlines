import { NextFunction, Request, Response, Router } from 'express'
import { ReservationController } from '../controllers'
import { success, schemaHandler } from './../middlewares'
import { Properties } from '../middlewares'
import { createReservation, confirmReservation, findId } from './../schemas'

export const reserver = Router()

const create = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body
  try {
    const controller = new ReservationController()
    const newReserver = await controller.create(data)

    success(req, res, newReserver, 201)
  } catch (error) {
    next(error)
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body
  const { id } = req.params

  try {
    const controller = new ReservationController()
    const updated = await controller.update(id, data)
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
