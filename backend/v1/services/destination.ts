import { faker } from '@faker-js/faker'

export class DataFakeDestination {
  database: any = []
  constructor() {
    for (let i = 0; i < 10; i++) {
      this.database.push({
        id: faker.string.uuid(),
        name: faker.location.city(),
        image: faker.image.url(),
      })
    }
  }
}

const { database } = new DataFakeDestination()

export class DestinationService {
  // private readonly database: any
  constructor() {}

  findAll() {
    return database
  }
  findOne(id: string) {
    console.log(database)

    const destination = database.find((item: any) => item.id === id)
    return destination
  }
  create(data: any) {
    database.push(data)
    const destination = database.find((item: any) => item.id === data.id)

    return destination
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
