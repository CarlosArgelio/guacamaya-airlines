import { uuid as v4 } from 'uuidv4'

import { ReservationService } from '../services'
import { ResendService } from '../services'

export class ReservationController {
  constructor(
    private reservationService = new ReservationService(),
    private emailService = new ResendService(),
  ) {}

  async create(data: any) {
    const { email } = data
    const id = v4()

    const newReservation = {
      id,
      ...data,
    }

    const reservation =
      await this.reservationService.createReservation(newReservation)
    await this.emailService.sendEmail(
      email,
      'Hello World',
      '<p>This is a testing</p>',
    )
    return reservation
  }
}
