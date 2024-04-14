import { AirPortService } from '../airport'

describe('Test Instance AirPortService', () => {
  // Method FindAll
  describe('Shold be able to retrive all airports from the database using "findall" method', () => {
    test('should return an array of airports when the database is not empty', () => {
      const airportService = new AirPortService()
      const database = airportService.database
      const result = airportService.findAll()
      expect(result).toEqual(database)
    })
    test('should return an empty array when the database is empty', () => {
      const airportService = new AirPortService([])
      const result = airportService.findAll()
      expect(result).toEqual([])
    })
    // Should not throw an error
    test('should not throw an error when retrieving all airports from an empty database', () => {
      const airportService = new AirPortService([])
      expect(() => {
        airportService.findAll()
      }).not.toThrow()
    })
    test('should not return null or undefined when retrieving all airports from an empty database', () => {
      const airportService = new AirPortService([])
      const result = airportService.findAll()
      expect(result).not.toBeNull()
      expect(result).not.toBeUndefined()
    })
    test('should return a Array', () => {
      const airportService = new AirPortService([])
      const result = airportService.findAll()
      expect(result instanceof Array).toBe(true)
    })
  })

  describe('Should be able to retrieve one airport from database using "findOne" method', () => {
    test('should return undefined when the id does not exist in the database', () => {
      const airportService = new AirPortService()
      const id = 'nonexistent-id'
      const result = airportService.findOne(id)
      expect(result).toBeUndefined()
    })

    test('should return the airport with the specified id', () => {
      const airportService = new AirPortService()

      const id = airportService.database[0].id
      const result = airportService.findOne(id)

      expect(result).toEqual(airportService.database[0])
    })
  })
})
