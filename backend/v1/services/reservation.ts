import { AppDataSource, Reservations } from '../databases'

export class ReservationService {
  constructor(
    private readonly reservation = AppDataSource.getRepository(Reservations),
  ) {}

  async getByEmail(email: string) {
    const getData = await this.reservation.findBy({ email })
    return getData
  }

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
