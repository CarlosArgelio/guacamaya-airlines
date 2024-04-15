import { NextFunction, Request, Response, Router } from 'express'
import { CRUDController } from '../controllers'
import { DestinationService } from './../services'

export const destination = Router()

const findAll = (req: Request, res: Response, next: NextFunction) => {
  const controller = new CRUDController(new DestinationService())
  const destinations = controller.findAll()
  res.json(destinations)
}
const findOne = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  const controller = new CRUDController(new DestinationService())
  const airport = controller.findOne(id)
  res.json(airport)
}
const create = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body

  const controller = new CRUDController(new DestinationService())
  const newDestination = controller.create(data)
  res.status(201).json(newDestination)
}
const update = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const changes = req.body

  const controller = new CRUDController(new DestinationService())
  const updateDestination = controller.update(id, changes)
  res.json(updateDestination)
}
const remove = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  const controller = new CRUDController(new DestinationService())
  controller.remove(id)

  res.status(204).json()
}

destination.get('/', findAll)
destination.get('/:id', findOne)
destination.post('/', create)
destination.put('/:id', update)
destination.delete('/:id', remove)
