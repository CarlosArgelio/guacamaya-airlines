---
sidebar_position: 2
---

# Como crear un E2E nuevo

## Version 1

Dentro del backend tenemos la carpeta **__ test __** donde estan los test del proyecto
puede crear un nuevo archivo con un nombre identificativo que contenga esta estructura:

```bash
naming.test.ts
```

dentro del mismo archivo podras copiar esta estructura y empezar a realizar pruebasa partir de alli:


```javascript
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
    const res = await api.get('/api/v1/')

    expect(res.statusCode).toEqual(200)
  })

  afterAll(() => {
    server.close()
  })
})
```