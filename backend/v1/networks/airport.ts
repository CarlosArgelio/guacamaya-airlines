import { NextFunction, Request, Response, Router } from 'express'
import { CRUDController } from './../controllers'
import { AirPortService } from './../services'

export const airpot = Router()

const findAll = (req: Request, res: Response, next: NextFunction) => {
  const controller = new CRUDController(new AirPortService())
  const airports = controller.findAll()
  res.json(airports)
}
const findOne = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  const controller = new CRUDController(new AirPortService())
  const airport = controller.findOne(id)
  res.json(airport)
}
const create = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body

  const controller = new CRUDController(new AirPortService())
  const newAirPort = controller.create(data)
  res.status(201).json(newAirPort)
}
const update = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const changes = req.body

  const controller = new CRUDController(new AirPortService())
  const updateAirport = controller.update(id, changes)
  res.json(updateAirport)
}
const remove = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  const controller = new CRUDController(new AirPortService())
  controller.remove(id)

  res.status(204).json()
}

airpot.get('/', findAll)
airpot.get('/:id', findOne)
airpot.post('/', create)
airpot.put('/:id', update)
airpot.delete('/:id', remove)
