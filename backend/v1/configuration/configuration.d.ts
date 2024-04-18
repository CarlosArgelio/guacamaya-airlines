import { DataSourceOptions } from 'typeorm'

export interface DataBase {
  type: DataSourceOptions
  host: string
  port: number
  username: string
  password: string
  database: string
}

export interface Config {
  port: number
  apiKeyResend: string
  emailFromResend: string
  database: DataBase
  isDev: boolean
  isProd: boolean
}
