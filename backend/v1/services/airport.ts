import { uuid } from 'uuidv4'
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

  /**
   * Retrieves all airports from the database.
   * @returns {Array} An array of airports from the database. Each airport object contains an `id` and a `name` property.
   */
  findAll(): Array<any> {
    return this.database
  }

  /**
   * Retrieves a single airport from the database based on its ID.
   * @param id - The ID of the airport to retrieve from the database.
   * @returns The airport object with the specified ID if found, otherwise undefined.
   */
  findOne(id: string) {
    return this.database.find((item: any) => item.id === id)
  }

  /**
   * Adds a new airport object to the database array.
   * @param data - The airport object to be added.
   * @returns The airport object that was added to the database array.
   */
  create(data: any) {
    const id = uuid()
    const newData = { ...data, id }
    this.database.push(newData)
    return data
  }

  /**
   * Updates an airport object in the database based on its ID.
   * @param id - The ID of the airport to be updated.
   * @param changes - An object containing the changes to be applied to the airport.
   * @returns The updated airport object.
   */
  update(id: string, changes: any) {
    const index = this.database.findIndex((item: any) => item.id === id)
    if (index === -1) {
      return null
    }
    this.database[index] = { ...this.database[index], ...changes }
    return this.database[index]
  }

  /**
   * Removes an airport object from the database based on its ID.
   *
   * @param {string} id - The ID of the airport to be removed.
   * @returns {boolean|null} - Returns true if the airport object was successfully removed, or null if the airport object with the specified ID was not found in the database.
   */
  remove(id: string): boolean | null {
    const index = this.database.findIndex((item) => item.id === id)
    if (index === -1) {
      return null
    }
    this.database.splice(index, 1)
    return true
  }
}
