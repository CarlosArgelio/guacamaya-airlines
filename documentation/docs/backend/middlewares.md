---
sidebar_position: 3
---

# Middlewares

## Response

Creamos una funcion que funciona como middleware de respuesta esto nos apoya a tener una consistencia en como la api responde en todos los casos para asi mantener un standar de las respuestas

### Funcion "success"

```javascript
import { Request, Response } from 'express'

export const success = ( req: Request, res: Response, message: any, statusCode = 200) => {
  const response = {
    statusCode,
    error: false,
    data: message,
  }

  res.json(statusCode).json(response)
}
```

Como podemos observar esta funcion reibe como parametro el "Request" y "Response" de express donde en este caso solo usaremos el Response para retornar la constante que dichamente se llama "response", aparte en los parametros pasamos un message que puede tener cualquier valor y el statusCode por defecto tenemos 200

### Funcion "error"

Funciona exactamente igual que la anterior y es parecido, pero dentro de la aplicacion tendremos unos usos particulares, primeramente dejamo ensenartelo:

```javascript
import { Request, Response } from 'express'

export const error = ( req: Request, res: Response, message: any, statusCode = 500 ) => {
  const response = {
    statusCode,
    error: true,
    data: message,
  }

  res.json(statusCode).json(response)
}
```

Podremos observar en la constante response pasamos un parametro "error" como true esto ayudara a cualquier agente externo a tener otro metodo para saber o validar si la api dio un error

## Error Handler

Este middleware atrapa los errores en el codigo, como? te muestro un ejemplo

Digamos que tenemos el endpoint para buscar un unico Aeropuerto

```javascript
const findOne = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params

  try {
    const controller = new CRUDController(new AirPortService())
    const airport = controller.findOne(id)
    success(req, res, airport)
  } catch (error) {
    next(error)
  }
}
```

como podemos ver tenemos un dato que nos envia el usuario que es el ID, que pasa si el id no es correcto?, este dato pasara hasta el servicio el cual no traera ninguna informacion y el controllador validara si hay algun dato como lo podemos ver a continuacion en el metodo findOne

```javascript
  findOne(id: string) {
    const data = this.services.findOne(id)
    if (!data) {
      throw boom.notFound('id not found')
    }
    return data
  }
```

Si no hay informacion retornamos un error de boom el cual sera atrapado en el cath se enviara al ErrorHandler

```javascript
export const errorHandler = ( err: any, req: Request, res: Response, next: NextFunction,
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

```

**Nota:** Antes que nada, este error en especifico no lo procesara este middleware si no el siguiente que vamos a ver, pero nos funciono para el ejemplo

En caso de que esto fuera un error desconocido hay 2 cosas de retorno de informacion

### Desarrollo

En caso de que el NODE_ENV apunte a desarrollo enviaremos el stack del error para ver la traza de donde ocurrio, podras ver el amable mensaje que dice

```javascript
let extra: 'ESTE ERROR SOLO SE PUEDE VER EN MODO DE DESARROLLO, EN PRODUCCION NO SE VISUALIZARA'
```

### Produccion

En caso de que estemos en un ambiente productivo no se enviara la traza del error por lo cual nos quedara ver los logs y depurar segun las indicaciones que tengamos

## Boom Error Handler

Este middleware es igual al resto con la diferencia que valida si el error es de tipo Boom como lo vimos hace rato y te retorna la informacion con un formato amigable de boom

```javascript
export const boomErrorHandler = ( err: any, req: Request, res: Response, next: NextFunction ) => {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}
```