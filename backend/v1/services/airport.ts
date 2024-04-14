import { faker } from '@faker-js/faker'

export class DataFakeAirPort {
  database: any = []
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.database.push({
        id: faker.string.uuid(),
        name: faker.location.city(),
      })
    }
  }
}

const { database } = new DataFakeAirPort()

export class AirPortService {
  // private readonly database: any = []
  constructor() {}

  findAll() {
    return database
  }
  findOne(id: string) {
    const airPort = database.find((item: any) => item.id === id)
    return airPort
  }
  create(data: any) {
    database.push(data)
    return data
  }
  update(id: string, changes: any) {
    const index = database.findIndex((item: any) => item.id === id)
    database[index] = {
      ...database[index],
      ...changes,
    }
    return database[index]
  }
  remove(id: string) {
    const index = database.findIndex((item: any) => item.id === id)
    database.splice(index, 1)
    return
  }
}
