import { uuid } from 'uuidv4'
import { AirPortService } from '../services'

export class AirPortController {
  constructor(private readonly airportService = new AirPortService()) {}

  findAll() {
    return this.airportService.findAll()
  }
  findOne(id: string) {
    const airport = this.airportService.findOne(id)
    if (!airport) {
      throw new Error('Airport not found')
    }
    return airport
  }
  create(data: any) {
    const id = uuid()
    const newAirPort = { id, ...data }
    return this.airportService.create(newAirPort)
  }
  update(id: string, changes: any) {
    this.findOne(id)
    return this.airportService.update(id, changes)
  }
  remove(id: string) {
    this.findOne(id)
    return this.airportService.remove(id)
  }
}
