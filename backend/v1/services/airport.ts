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

export class AirPortService {
  constructor(
    public readonly database: Array<any> = new DataFakeAirPort().database,
  ) {}

  findAll() {
    const airtports = this.database
    return airtports
  }
  findOne(id: string) {
    const airPort = this.database.find((item: any) => item.id === id)
    return airPort
  }
  create(data: any) {
    this.database.push(data)
    return data
  }
  update(id: string, changes: any) {
    const index = this.database.findIndex((item: any) => item.id === id)
    this.database[index] = {
      ...this.database[index],
      ...changes,
    }
    return this.database[index]
  }
  remove(id: string) {
    const index = this.database.findIndex((item: any) => item.id === id)
    this.database.splice(index, 1)
    return
  }
}
