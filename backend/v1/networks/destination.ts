import { NextFunction, Request, Response, Router } from 'express'
import { CRUDController } from '../controllers'
import { DestinationService } from './../services'
import { success } from '../middlewares'

export const destination = Router()

const findAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    const controller = new CRUDController(new DestinationService())
    const destinations = controller.findAll()
    success(req, res, destinations)
  } catch (error) {
    next(error)
  }
}
const findOne = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  try {
    const controller = new CRUDController(new DestinationService())
    const airport = controller.findOne(id)
    success(req, res, airport)
  } catch (error) {
    next(error)
  }
}
const create = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body

  try {
    const controller = new CRUDController(new DestinationService())
    const newDestination = controller.create(data)
    success(req, res, newDestination, 201)
  } catch (error) {
    next(error)
  }
}
const update = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const changes = req.body

  try {
    const controller = new CRUDController(new DestinationService())
    const updateDestination = controller.update(id, changes)
    success(req, res, updateDestination)
  } catch (error) {
    next(error)
  }
}
const remove = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const controller = new CRUDController(new DestinationService())
    controller.remove(id)

    res.status(204).json()
  } catch (error) {
    next(error)
  }
}

destination.get('/', findAll)
destination.get('/:id', findOne)
destination.post('/', create)
destination.put('/:id', update)
destination.delete('/:id', remove)
