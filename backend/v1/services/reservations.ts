import { uuid as v4 } from 'uuidv4'
import { faker } from '@faker-js/faker'

export class ReservationService {
  constructor(private readonly database: any = []) {
    for (let i = 0; i < 10; i++) {
      this.database.push({
        id: faker.string.uuid(),
        email: faker.internet.email(),
        oneWay: faker.datatype.boolean(),
        roundTrip: faker.datatype.boolean(),
        from: faker.location.city(),
        to: faker.location.city(),
        dateStart: faker.date.future(),
        dateEnd: faker.date.future(),
        people: {
          adults: faker.number.int({ min: 1, max: 10 }),
          children: faker.number.int({ min: 0, max: 10 }),
        },
      })
    }
  }

  async createReservation(reservation: any) {
    const id = v4()
    const newReservation = { ...reservation, id }
    this.database.push(newReservation)
    return reservation
  }
}
