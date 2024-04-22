import { uuid as v4 } from 'uuidv4'
import { faker } from '@faker-js/faker'

import { AppDataSource, Reservations } from '../databases'

export class ReservationService {
  constructor(
    private readonly reservation = AppDataSource.getRepository(Reservations),
  ) {}

  async getAllReservations() {
    return await this.reservation.find()
  }

  async createReservation(reservation: any) {
    const newReservation = this.reservation.create(reservation)
    const saveData = await this.reservation.save(newReservation)
    return saveData
  }

  async updateReservation(id: string, changes: any) {
    const reservation = await this.reservation.findOneBy({ id })
    if (!reservation) {
      throw new Error('Reservation not found')
    }

    reservation.status = changes.status
    const saveData = await this.reservation.save(reservation)
    return saveData
  }
}
