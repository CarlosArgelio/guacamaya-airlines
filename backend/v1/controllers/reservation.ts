import { ReservationService, ResendService } from '../services'

export class ReservationController {
  constructor(
    private reservationService = new ReservationService(),
    private emailService = new ResendService(),
  ) {}

  async create(data: any) {
    const { email } = data
    const reservation = await this.reservationService.createReservation(data)
    await this.emailService.sendEmail(
      email,
      'Hello World',
      '<p>This is a testing</p>',
    )
    return reservation
  }
}
