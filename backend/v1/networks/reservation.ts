import { NextFunction, Request, Response, Router } from 'express'
import { ReservationController } from '../controllers/reservation'

const reserver = Router()

const create = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body

  const controller = new ReservationController()
  const newReserver = controller.create(data)
  return res.status(201).json(newReserver)
}

reserver.post('/', create)
