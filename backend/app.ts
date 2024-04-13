import express, { Application, Request, Response } from 'express'

export const createApp = () => {
  const app: Application = express()

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
  })

  app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })

  return app
}
