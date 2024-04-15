import { Router } from 'express'

import { airpot } from './airport'
import { destination } from './destination'
import { reserver } from './reservation'

export const networks = () => {
  const router = Router()
  router.use('/airports', airpot)
  router.use('/destinations', destination)
  router.use('/reservations', reserver)

  return router
}
