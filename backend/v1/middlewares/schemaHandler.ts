import boom from '@hapi/boom'
import { NextFunction, Request, Response } from 'express'
import { Properties } from './index'

export const schemaHandler = (Dtos: any, property: Properties) => {
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
