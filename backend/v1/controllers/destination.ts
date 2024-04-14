import { uuid } from 'uuidv4'
import { DestinationService } from '../services/destination'

export class DestinationController {
  constructor(private readonly destinationService = new DestinationService()) {}

  findAll() {
    return this.destinationService.findAll()
  }
  findOne(id: string) {
    return this.destinationService.findOne(id)
  }
  create(data: any) {
    const id = uuid()
    const newDestination = { id, ...data }

    return this.destinationService.create(newDestination)
  }
  update(id: string, changes: any) {
    return this.destinationService.update(id, changes)
  }
  remove(id: string) {
    return this.destinationService.remove(id)
  }
}
