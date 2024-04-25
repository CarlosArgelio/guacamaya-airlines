import { NextFunction, Request, Response, Router } from 'express'
import { ReservationController } from '../controllers'
import { success, schemaHandler } from './../middlewares'
import { Properties } from '../middlewares'
import { createReservation, confirmReservation, findId } from './../schemas'

export const reserver = Router()

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const controller = new ReservationController()
    const reservations = await controller.getAll()

    success(req, res, reservations, 200)
  } catch (error) {
    next(error)
  }
}

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
  let data: any = null
  const { id } = req.params
  const { status } = req.query

  if (status === 'CONFIRM') {
    data = { status: true }
  } else if (status === 'RECHAZED') {
    data = { status: false }
  } else {
    throw new Error('Invalid query')
  }

  try {
    const controller = new ReservationController()
    const updated = await controller.update(id, data)
    success(req, res, updated, 200)
  } catch (error) {
    next(error)
  }
}

reserver.post('/', schemaHandler(createReservation, Properties.BODY), create)
reserver.get('/:id/confirm', schemaHandler(findId, Properties.PATH), update)
reserver.get('/flight-plans', getAll)
