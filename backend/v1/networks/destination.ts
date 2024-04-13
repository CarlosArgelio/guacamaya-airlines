import { NextFunction, Request, Response, Router } from 'express'
import { DestinationController } from '../controllers/destination'

const destination = Router()

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
  return updateDestination
}
const remove = (req: Request, res: Response, nex: NextFunction) => {
  const { id } = req.params

  const controller = new DestinationController()
  controller.remove(id)

  res.status(204).json()
}

destination.get('/destinations', findAll)
destination.get('/destinations/:id', findOne)
destination.post('/destinations', create)
destination.put('/destinations/:id', update)
destination.delete('/destinations/:id', remove)
