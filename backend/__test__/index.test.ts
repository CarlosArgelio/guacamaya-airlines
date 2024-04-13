import { createApp } from '../app'
import request from 'supertest'

describe('GET /', () => {
  let app: any = null
  let server: any = null
  let api: any = null

  beforeAll(() => {
    app = createApp()
    server = app.listen(3001)
    api = request(app)
  })

  test('return 200 & Hello World test', async () => {
    const res = await api.get('/')

    expect(res.statusCode).toEqual(200)
  })

  afterAll(() => {
    server.close()
  })
})
