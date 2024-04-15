import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'

import { networks } from './networks'
import { config } from './configuration/config'

const { port } = config

export const createApp = () => {
  const app: Application = express()

  app.use(bodyParser.json())

  // home endpoint

  app.use(express.static('public'))

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/welcome.html')
  })

  const networkRouter = networks()

  app.use('/api/v1', networkRouter)

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })

  return app
}
