import { error, success } from './response'
import { schemaHandler } from './schemaHandler'
import { boomErrorHandler, errorHandler, logErrors } from './errorHandler'
// import { Properties } from './../middlewares/midd'

enum Properties {
  BODY = 'body',
  QUERY = 'query',
  PATH = 'params',
}

export {
  error,
  success,
  schemaHandler,
  boomErrorHandler,
  errorHandler,
  logErrors,
  Properties,
}
