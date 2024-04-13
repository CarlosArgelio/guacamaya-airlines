export class AirPortService {
  constructor(private readonly database: any = []) {}

  findAll() {
    return this.database
  }
  findOne(id: string) {
    const airPort = this.database.find((item: any) => item.id === id)
    return airPort
  }
  create(data: any) {
    this.database.push(data)
    return data
  }
  update(id: string, changes: any) {
    const index = this.database.findIndex((item: any) => item.id === id)
    this.database[index] = {
      ...this.database[index],
      ...changes,
    }
    return this.database[index]
  }
  remove(id: string) {
    const index = this.database.findIndex((item: any) => item.id === id)
    this.database.splice(index, 1)
    return
  }
}
