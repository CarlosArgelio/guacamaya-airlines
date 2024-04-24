import { uuid } from 'uuidv4'
import { faker } from '@faker-js/faker'
import { AppDataSource, Airports } from '../databases'

export class AirPortService {
  constructor(
    public readonly database = AppDataSource.getRepository(Airports),
  ) {}

  /**
   * Retrieves all airports from the database.
   * @returns {Array} An array of airports from the database. Each airport object contains an `id` and a `name` property.
   */
  async findAll(): Promise<Airports[]> {
    return this.database.find()
  }

  /**
   * Retrieves a single airport from the database based on its ID.
   * @param id - The ID of the airport to retrieve from the database.
   * @returns The airport object with the specified ID if found, otherwise undefined.
   */
  async findOne(id: string): Promise<Airports | null> {
    const airport = await this.database.findOneBy({ id })
    return airport
  }

  /**
   * Adds a new airport object to the database array.
   * @param data - The airport object to be added.
   * @returns The airport object that was added to the database array.
   */
  async create(data: any) {
    const newAirport = this.database.create(data)
    const saveData = await this.database.save(newAirport)
    return saveData
  }

  /**
   * Updates an airport object in the database based on its ID.
   * @param id - The ID of the airport to be updated.
   * @param changes - An object containing the changes to be applied to the airport.
   * @returns The updated airport object.
   */
  async update(id: string, changes: any) {
    const airport = await this.findOne(id)
    if (!airport) {
      throw new Error('Airport not found')
    }
    airport.name = changes.name
    const saveData = await this.database.save(airport)
    return saveData
  }

  /**
   * Removes an airport object from the database based on its ID.
   *
   * @param {string} id - The ID of the airport to be removed.
   * @returns {boolean|null} - Returns true if the airport object was successfully removed, or null if the airport object with the specified ID was not found in the database.
   */
  remove(id: string) {}
}
