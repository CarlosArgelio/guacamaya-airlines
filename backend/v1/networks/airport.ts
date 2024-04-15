import { NextFunction, Request, Response, Router } from 'express'
import { CRUDController } from './../controllers'
import { AirPortService } from './../services'
import { success, schemaHandler } from './../middlewares'
import { Properties } from './../middlewares'
import { Schemas } from './../schemas'

export const airpot = Router()

const findAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    const controller = new CRUDController(new AirPortService())
    const airports = controller.findAll()
    success(req, res, airports)
  } catch (error) {
    next(error)
  }
}
const findOne = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const controller = new CRUDController(new AirPortService())
    const airport = controller.findOne(id)
    success(req, res, airport)
  } catch (error) {
    next(error)
  }
}
const create = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body

  try {
    const controller = new CRUDController(new AirPortService())
    const newAirPort = controller.create(data)
    success(req, res, newAirPort, 201)
  } catch (error) {
    next(error)
  }
}
const update = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const changes = req.body

  try {
    const controller = new CRUDController(new AirPortService())
    const updateAirport = controller.update(id, changes)
    success(req, res, updateAirport)
  } catch (error) {
    next(error)
  }
}
const remove = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const controller = new CRUDController(new AirPortService())
    controller.remove(id)
    res.status(204).json()
  } catch (error) {
    next(error)
  }
}

airpot.get('/', findAll)
airpot.get('/:id', schemaHandler(Schemas.ID_SCHEMA, Properties.PATH), findOne)
airpot.post(
  '/',
  schemaHandler(Schemas.CREATE_AIRPORT_SCHEMA, Properties.BODY),
  create,
)
airpot.put(
  '/:id',
  schemaHandler(Schemas.ID_SCHEMA, Properties.PATH),
  schemaHandler(Schemas.UPDATE_AIRPORT_SCHEMA, Properties.BODY),
  update,
)
airpot.delete('/:id', schemaHandler(Schemas.ID_SCHEMA, Properties.PATH), remove)
