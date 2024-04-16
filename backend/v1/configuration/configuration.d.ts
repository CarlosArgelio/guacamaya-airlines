export interface DataBase {
  type: string
  host: string
  port: string
  username: string
  password: string
  database: string
}

export interface Config {
  port: string
  apiKeyResend: string
  emailFromResend: string
  database: DataBase
  isDev: boolean
  isProd: boolean
}
