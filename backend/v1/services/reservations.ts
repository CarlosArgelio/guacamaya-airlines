import { uuid as v4 } from 'uuidv4'
import { faker } from '@faker-js/faker'

import { AppDataSource, Reservations } from './../databases'

export class ReservationService {
  constructor(
    private readonly reservation = AppDataSource.getRepository(Reservations),
  ) {}

  async createReservation(reservation: any) {
    const newReservation = this.reservation.create(reservation)
    const saveData = await this.reservation.save(newReservation)
    console.log(
      '🚀 ~ ReservationService ~ createReservation ~ saveData:',
      saveData,
    )
    return saveData
  }

  async updateReservation(id: string, changes: any) {
    const update = await this.reservation.update(id, changes)
    return update
  }
}
