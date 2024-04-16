import { DataSource } from 'typeorm'

import { Reservation } from './entity/reservation'

import { config } from './../configuration/config'

const { type, host, port, username, password, database } = config.database

export const AppDataSource = new DataSource({
  //@ts-ignore
  type,
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
  logging: true,
  entities: [Reservation],
  subscribers: [],
  migrations: [],
})

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error))
