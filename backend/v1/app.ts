import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'

import { networks } from './networks'

export const createApp = () => {
  const app: Application = express()

  app.use(bodyParser.json())

  // home endpoint

  const networkRouter = networks()

  app.use('/api/v1', networkRouter)

  app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })

  return app
}
