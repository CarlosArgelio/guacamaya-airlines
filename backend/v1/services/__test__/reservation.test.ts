import { faker } from '@faker-js/faker'

import { ReservationService } from './../reservations'

describe('ReservationService', () => {
  describe('createReservation', () => {
    test('should create a reservation', () => {
      const reservationService = new ReservationService()
      const data = {
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
      }
      const reservation = reservationService.createReservation(data)
      expect(reservation).toBeDefined()
    })
  })
})
