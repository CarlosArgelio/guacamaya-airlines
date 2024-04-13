import { AirPortService } from '../services/airport'

export class AirPortController {
  constructor(private readonly airportService = new AirPortService()) {}

  findAll() {
    return this.airportService.findAll()
  }
  findOne(id: string) {
    return this.airportService.findOne(id)
  }
  create(data: any) {
    return this.airportService.create(data)
  }
  update(id: string, changes: any) {
    return this.airportService.update(id, changes)
  }
  remove(id: string) {
    return this.airportService.remove(id)
  }
}
