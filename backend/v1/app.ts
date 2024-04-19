import 'reflect-metadata'
import express, { Application } from 'express'
import bodyParser from 'body-parser'

import { networks } from './networks'
import { config } from './configuration/config'
import { boomErrorHandler, errorHandler, logErrors } from './middlewares'

import { AppDataSource } from './databases'

const { port } = config

export const createApp = () => {
  AppDataSource

  const app: Application = express()

  app.use(bodyParser.json())

  // home endpoint

  app.use(express.static('public'))

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/welcome.html')
  })

  const networkRouter = networks()

  app.use('/api/v1', networkRouter)

  app.use(logErrors)

  app.use(boomErrorHandler)
  app.use(errorHandler)

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

  return app
}
