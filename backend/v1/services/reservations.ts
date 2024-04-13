export class ReservationService {
  constructor(private readonly database: any = []) {}

  async createReservation(reservation: any) {
    this.database.push(reservation)
    return reservation
  }
}
