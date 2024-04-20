import { Request, Response } from 'express'

export const success = (
  req: Request,
  res: Response,
  message: any,
  statusCode = 200,
) => {
  const response = {
    statusCode,
    error: false,
    data: message,
  }

  res.status(statusCode).json(response)
}

export const error = (
  req: Request,
  res: Response,
  message: any,
  statusCode = 500,
) => {
  const response = {
    statusCode,
    error: true,
    data: message,
  }

  res.status(statusCode).json(response)
}
