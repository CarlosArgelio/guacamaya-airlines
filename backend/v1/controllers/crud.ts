import boom from '@hapi/boom'
import { AirPortService } from '../services'

/**
 * The Controller` class is responsible for handling requests related to airports.
 * It interacts with the `AirPortService` class to perform CRUD operations on data.
 */
export class CRUDController {
  public readonly services: AirPortService
  /**
   * Creates an instance of `AirPortController`.
   * @param airportService An instance of the `AirPortService` class used to interact with the data in the database.
   */
  constructor(services: AirPortService) {
    this.services = services
  }

  /**
   * Retrieves all airports from the database.
   * @returns An array of all airports from the database.
   */
  findAll() {
    return this.services.findAll()
  }

  /**
   * Retrieves a single from the database based on its ID.
   * @param id The ID of the to retrieve.
   * @returns The object with the specified ID from the database.
   * @throws Error if the is not found.
   */
  async findOne(id: string) {
    const data = await this.services.findOne(id)
    if (!data) {
      throw boom.notFound('id not found')
    }
    return data
  }

  /**
   * Adds a new object to the database.
   * @param data The data of the new object.
   * @returns The added object.
   */
  async create(data: any) {
    return await this.services.create(data)
  }

  /**
   * Updates an existing object in the database based on its ID.
   * @param id The ID of the to update.
   * @param changes The changes to apply to the object.
   * @returns The updated object.
   * @throws Error if the is not found.
   */
  async update(id: string, changes: any) {
    await this.findOne(id)
    return await this.services.update(id, changes)
  }

  /**
   * Removes an object from the database based on its ID.
   * @param id The ID of the to remove.
   * @returns True if the is successfully removed, or null if the is not found.
   * @throws Error if the is not found.
   */
  async remove(id: string) {
    await this.findOne(id)
    return await this.services.remove(id)
  }
}
