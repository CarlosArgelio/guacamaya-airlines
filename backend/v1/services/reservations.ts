import { uuid as v4 } from 'uuidv4'
import { faker } from '@faker-js/faker'

import { AppDataSource, Reservations } from './../databases'

export class ReservationService {
  constructor(
    private readonly reservation = AppDataSource.getRepository(Reservations),
  ) {}

  async createReservation(reservation: any) {
    const id = v4()
    const newReservation = { ...reservation, id }
    // this.database.push(newReservation)
    return reservation
  }

  async updateReservation(id: string, changes: any) {
    const update = await this.reservation.update(id, changes)
    return update
  }
}
