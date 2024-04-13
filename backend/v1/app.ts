import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'

export const createApp = () => {
  const app: Application = express()

  app.use(bodyParser.json())

  const route = express.Router()

  route.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

  app.use('/api/v1', route)

  app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })

  return app
}
