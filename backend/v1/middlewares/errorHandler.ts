import { NextFunction, Request, Response } from 'express'
import { error } from './response'
import { config } from './../configuration/config'

const { isDev } = config

export const logErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err)
  next(err)
}

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (isDev) {
    let messageResponse = {
      message: err.message,
      stack: {
        extra:
          'ESTE ERROR SOLO SE PUEDE VER EN MODO DE DESARROLLO, EN PRODUCCION NO SE VISUALIZARA',
        message: err.stack,
      },
    }
    error(req, res, messageResponse, 409)
  }

  let messageResponse = {
    message: err.message,
  }

  error(req, res, messageResponse, 409)
}

export const boomErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}
