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

export class DestinationService {
  // private readonly database: any
  constructor(
    public readonly database: Array<any> = new DataFakeDestination().database,
  ) {}

  findAll() {
    return this.database
  }
  findOne(id: string) {
    console.log(this.database)

    const destination = this.database.find((item: any) => item.id === id)
    return destination
  }
  create(data: any) {
    this.database.push(data)
    const destination = this.database.find((item: any) => item.id === data.id)

    return destination
  }
  update(id: string, changes: any) {
    const index = this.database.findIndex((item: any) => item.id === id)
    if (index === -1) {
      return null
    }
    this.database[index] = { ...this.database[index], ...changes }
    return this.database[index]
  }
  remove(id: string) {
    const index = this.database.findIndex((item) => item.id === id)
    if (index === -1) {
      return null
    }
    this.database.splice(index, 1)
    return true
  }
}
