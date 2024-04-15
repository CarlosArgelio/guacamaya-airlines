import { createAirPort, updateAirPort, findId } from './airports'
import { createDestination, updateDestination } from './destination'
import { createReservation } from './reservation'

export enum Schemas {
  CREATE_AIRPORT_SCHEMA = createAirPort,
  UPDATE_AIRPORT_SCHEMA = updateAirPort,
  CREATE_DESTINATION_SCHEMA = createDestination,
  UPDATE_DESTINATION_SCHEMA = updateDestination,
  CREATE_RESERVATION_SCHEMA = createReservation,
  ID_SCHEMA = findId,
}
