import { faker } from '@faker-js/faker'

export class ReservationService {
  constructor(private readonly database: any = []) {
    for (let i = 0; i < 10; i++) {
      this.database.push({
        id: faker.datatype.uuid(),
        email: faker.internet.email(),
        oneWay: faker.datatype.boolean(),
        roundTrip: faker.datatype.boolean(),
        from: faker.address.city(),
        to: faker.address.city(),
        dateStart: faker.date.future(),
        dateEnd: faker.date.future(),
        people: {
          adults: faker.datatype.number({ min: 1, max: 10 }),
          children: faker.datatype.number({ min: 0, max: 10 }),
        },
      })
    }
  }

  async createReservation(reservation: any) {
    this.database.push(reservation)
    return reservation
  }
}
