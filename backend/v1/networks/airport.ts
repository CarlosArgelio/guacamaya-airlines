import { NextFunction, Request, Response, Router } from 'express'
import { AirPortController } from '../controllers/airport'

export const airpot = Router()

const findAll = (req: Request, res: Response, nex: NextFunction) => {
  const controller = new AirPortController()
  const airports = controller.findAll()
  res.json(airports)
}
const findOne = (req: Request, res: Response, nex: NextFunction) => {
  const { id } = req.params

  const controller = new AirPortController()
  const airport = controller.findOne(id)
  res.json(airport)
}
const create = (req: Request, res: Response, nex: NextFunction) => {
  const data = req.body

  const controller = new AirPortController()
  const newAirPort = controller.create(data)
  res.status(201).json(newAirPort)
}
const update = (req: Request, res: Response, nex: NextFunction) => {
  const { id } = req.params
  const changes = req.body

  const controller = new AirPortController()
  const updateAirport = controller.update(id, changes)
  return updateAirport
}
const remove = (req: Request, res: Response, nex: NextFunction) => {
  const { id } = req.params

  const controller = new AirPortController()
  controller.remove(id)

  res.status(204).json()
}

airpot.get('/', findAll)
airpot.get('/:id', findOne)
airpot.post('/', create)
airpot.put('/:id', update)
airpot.delete('/:id', remove)
