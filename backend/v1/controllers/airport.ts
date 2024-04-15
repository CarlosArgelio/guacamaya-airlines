import { uuid } from 'uuidv4'
import { AirPortService } from '../services'

export class AirPortController {
  constructor(private readonly airportService = new AirPortService()) {}

  findAll() {
    return this.airportService.findAll()
  }
  findOne(id: string) {
    return this.airportService.findOne(id)
  }
  create(data: any) {
    const id = uuid()
    const newAirPort = { id, ...data }
    return this.airportService.create(newAirPort)
  }
  update(id: string, changes: any) {
    return this.airportService.update(id, changes)
  }
  remove(id: string) {
    return this.airportService.remove(id)
  }
}
