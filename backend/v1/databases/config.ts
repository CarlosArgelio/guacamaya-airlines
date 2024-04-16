import { config } from './../configuration/config'

const { type, host, port, username, password, database } = config.database

export const AppDataSource = new DataSource({
  type,
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
  logging: true,
  entities: [], // import entities
  subscribers: [],
  migrations: [],
})
