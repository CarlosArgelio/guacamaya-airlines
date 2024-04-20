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
  findOne(id: string) {
    const data = this.services.findOne(id)
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
  create(data: any) {
    return this.services.create(data)
  }

  /**
   * Updates an existing object in the database based on its ID.
   * @param id The ID of the to update.
   * @param changes The changes to apply to the object.
   * @returns The updated object.
   * @throws Error if the is not found.
   */
  update(id: string, changes: any) {
    this.findOne(id)
    return this.services.update(id, changes)
  }

  /**
   * Removes an object from the database based on its ID.
   * @param id The ID of the to remove.
   * @returns True if the is successfully removed, or null if the is not found.
   * @throws Error if the is not found.
   */
  remove(id: string) {
    this.findOne(id)
    return this.services.remove(id)
  }
}
