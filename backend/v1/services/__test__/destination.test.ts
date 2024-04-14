import { faker } from '@faker-js/faker'
import { DestinationService } from './../destination'

describe('Test Instance AirPortService', () => {
  // Method FindAll
  describe('Shold be able to retrive all airports from the database using "findall" method', () => {
    test('should return an array of airports when the database is not empty', () => {
      const airportService = new DestinationService()
      const database = airportService.database
      const result = airportService.findAll()
      expect(result).toEqual(database)
    })
    test('should return an empty array when the database is empty', () => {
      const airportService = new DestinationService([])
      const result = airportService.findAll()
      expect(result).toEqual([])
    })
    // Should not throw an error
    test('should not throw an error when retrieving all airports from an empty database', () => {
      const airportService = new DestinationService([])
      expect(() => {
        airportService.findAll()
      }).not.toThrow()
    })
    test('should not return null or undefined when retrieving all airports from an empty database', () => {
      const airportService = new DestinationService([])
      const result = airportService.findAll()
      expect(result).not.toBeNull()
      expect(result).not.toBeUndefined()
    })
    test('should return a Array', () => {
      const airportService = new DestinationService([])
      const result = airportService.findAll()
      expect(result instanceof Array).toBe(true)
    })
  })
  // Method FindAll
  describe('Should be able to retrieve one destination from database using "findOne" method', () => {
    test('should return undefined when the id does not exist in the database', () => {
      const airportService = new DestinationService()
      const id = 'nonexistent-id'
      const result = airportService.findOne(id)
      expect(result).toBeUndefined()
    })

    test('should return the destination with the specified id', () => {
      const airportService = new DestinationService()

      const id = airportService.database[0].id
      const result = airportService.findOne(id)

      expect(result).toEqual(airportService.database[0])
    })
  })
  // Method Create
  describe('Should be able to create a new destination in the database using "create" method', () => {
    // Should add a new destination object to the database array
    test('should add a new destination object to the database array when data is provided', () => {
      const airportService = new DestinationService()
      const data = {
        id: faker.string.uuid(),
        name: faker.location.city(),
      }
      const result = airportService.create(data)
      expect(result).toEqual(data)
      expect(airportService.database).toContain(data)
    })
    // Add a new destination object to the database array and check if the length of the database array increases by 1
    test('should add a new destination object to the database array and increase the length by 1', () => {
      const airportService = new DestinationService()
      const data = {
        id: faker.string.uuid(),
        name: faker.location.city(),
      }
      const initialLength = airportService.database.length
      airportService.create(data)
      expect(airportService.database.length).toBe(initialLength + 1)
    })
  })

  describe('Should be able to update an destination in the database using "update" method', () => {
    test('should update an existing destination object in the database with valid input', () => {
      const airportService = new DestinationService()
      const id = airportService.database[0].id
      const image = airportService.database[0].image
      const changes = { name: 'New destination Name' }

      const updatedAirport = airportService.update(id, changes)

      expect(updatedAirport).toEqual({
        id: id,
        image: image,
        name: 'New destination Name',
      })
    })
    test('should return null if destination object with specified ID is not found in the database', () => {
      const airportService = new DestinationService()
      const id = 'nonexistent-id'
      const changes = { name: 'New destination Name' }

      const updatedAirport = airportService.update(id, changes)

      expect(updatedAirport).toBeNull()
    })
  })

  describe('Should be able to remove an destination from the database using "remove" method', () => {
    test('should remove an destination object from the database with valid input', () => {
      const airportService = new DestinationService()
      const id = airportService.database[0].id

      const result = airportService.remove(id)

      expect(result).toBe(true)
      expect(airportService.database).not.toContainEqual({ id: id })
    })
  })
})
