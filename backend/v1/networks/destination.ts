import { NextFunction, Request, Response, Router } from 'express'
import { DestinationController } from '../controllers'

export const destination = Router()

const findAll = (req: Request, res: Response, nex: NextFunction) => {
  const controller = new DestinationController()
  const destinations = controller.findAll()
  res.json(destinations)
}
const findOne = (req: Request, res: Response, nex: NextFunction) => {
  const { id } = req.params

  const controller = new DestinationController()
  const airport = controller.findOne(id)
  res.json(airport)
}
const create = (req: Request, res: Response, nex: NextFunction) => {
  const data = req.body

  const controller = new DestinationController()
  const newDestination = controller.create(data)
  res.status(201).json(newDestination)
}
const update = (req: Request, res: Response, nex: NextFunction) => {
  const { id } = req.params
  const changes = req.body

  const controller = new DestinationController()
  const updateDestination = controller.update(id, changes)
  res.json(updateDestination)
}
const remove = (req: Request, res: Response, nex: NextFunction) => {
  const { id } = req.params

  const controller = new DestinationController()
  controller.remove(id)

  res.status(204).json()
}

destination.get('/', findAll)
destination.get('/:id', findOne)
destination.post('/', create)
destination.put('/:id', update)
destination.delete('/:id', remove)
