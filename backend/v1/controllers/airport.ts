import { uuid } from 'uuidv4'
import { AirPortService } from '../services'

/**
 * The `AirPortController` class is responsible for handling requests related to airports.
 * It interacts with the `AirPortService` class to perform CRUD operations on airport data.
 */
export class AirPortController {
  /**
   * Creates an instance of `AirPortController`.
   * @param airportService An instance of the `AirPortService` class used to interact with the airport data in the database.
   */
  constructor(private readonly airportService = new AirPortService()) {}

  /**
   * Retrieves all airports from the database.
   * @returns An array of all airports from the database.
   */
  findAll() {
    return this.airportService.findAll()
  }

  /**
   * Retrieves a single airport from the database based on its ID.
   * @param id The ID of the airport to retrieve.
   * @returns The airport object with the specified ID from the database.
   * @throws Error if the airport is not found.
   */
  findOne(id: string) {
    const airport = this.airportService.findOne(id)
    if (!airport) {
      throw new Error('Airport not found')
    }
    return airport
  }

  /**
   * Adds a new airport object to the database.
   * @param data The data of the new airport object.
   * @returns The added airport object.
   */
  create(data: any) {
    const id = uuid()
    const newAirPort = { id, ...data }
    return this.airportService.create(newAirPort)
  }

  /**
   * Updates an existing airport object in the database based on its ID.
   * @param id The ID of the airport to update.
   * @param changes The changes to apply to the airport object.
   * @returns The updated airport object.
   * @throws Error if the airport is not found.
   */
  update(id: string, changes: any) {
    this.findOne(id)
    return this.airportService.update(id, changes)
  }

  /**
   * Removes an airport object from the database based on its ID.
   * @param id The ID of the airport to remove.
   * @returns True if the airport is successfully removed, or null if the airport is not found.
   * @throws Error if the airport is not found.
   */
  remove(id: string) {
    this.findOne(id)
    return this.airportService.remove(id)
  }
}
