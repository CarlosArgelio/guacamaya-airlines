import { AirPortService } from '../../services'
import { CRUDController } from '../crud'

describe('CRUD controller', () => {
  describe('Should be able to retrieve all objects from the database using findAll method', () => {
    test('should retrieve all objects from the database when calling findAll method', () => {
      const airportService = new AirPortService()
      const crudController = new CRUDController(airportService)

      const result = crudController.findAll()

      expect(result).toEqual(airportService.findAll())
    })
    test('should throw an error when trying to retrieve a non-existent object using findOne method', () => {
      const airportService = new AirPortService()
      const crudController = new CRUDController(airportService)
      const nonExistentId = 'non-existent-id'

      expect(() => crudController.findOne(nonExistentId)).toThrow(
        'id not found',
      )
    })
  })

  describe('Should be able to retrieve a single object from the database using findOne method', () => {
    it('should retrieve a single object from the database when calling findOne method', () => {
      const airportService = new AirPortService()
      const crudController = new CRUDController(airportService)
      const id = 'example-id'
      const expectedData = { id: 'example-id', name: 'Example Airport' }
      airportService.database.push(expectedData)

      const result = crudController.findOne(id)

      expect(result).toEqual(expectedData)
    })
  })
})
