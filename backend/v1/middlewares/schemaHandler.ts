import boom from '@hapi/boom'
import { NextFunction, Request, Response } from 'express'
import { Properties } from './middlewares'
import { Schemas } from './../schemas'

export const schemaHandler = (Dtos: Schemas, property: Properties) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property]
    // @ts-ignore
    const { error } = Dtos.validate(data, { abortEarly: false })
    if (error) {
      next(boom.badRequest(error))
    } else {
      next()
    }
  }
}
