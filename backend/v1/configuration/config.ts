import dotenv from 'dotenv'
import boom from '@hapi/boom'
import { DataSourceOptions } from 'typeorm'

import { Config } from './configuration'

dotenv.config({
  path: '.env',
})

const PORT = process.env.PORT
const KEY_RESEND_EMAIL = process.env.KEY_RESEND_EMAIL
const EMAIL_FROM_RESEND_EMAIL = process.env.EMAIL_FROM_RESEND_EMAIL
const NODE_ENV = process.env.NODE_ENV

const TYPE = process.env.DATABASE_ENGINE_NAME
const HOST = process.env.DATABASE_HOST
const PORT_DB = process.env.DATABASE_PORT
const USERNAME = process.env.DATABASE_USERNAME
const PASSWORD = process.env.DATABASE_PASSWORD
const DATABASE = process.env.DATABASE_NAME

if (!PORT) {
  throw boom.badRequest('PORT is not defined')
}

if (!KEY_RESEND_EMAIL) {
  throw boom.badRequest('KEY_RESEND_EMAIL is not defined')
}

if (!EMAIL_FROM_RESEND_EMAIL) {
  throw boom.badRequest('EMAIL_FROM_RESEND_EMAIL is not defined')
}

if (!TYPE) {
  throw boom.badRequest('DATABASE_ENGINE_NAME is not defined')
}

if (!HOST) {
  throw boom.badRequest('DATABASE_HOST is not defined')
}

if (!PORT_DB) {
  throw boom.badRequest('DATABASE_PORT is not defined')
}

if (!USERNAME) {
  throw boom.badRequest('DATABASE_USERNAME is not defined')
}

if (!PASSWORD) {
  throw boom.badRequest('DATABASE_PASSWORD is not defined')
}

if (!DATABASE) {
  throw boom.badRequest('DATABASE_NAME is not defined')
}

export const config: Config = {
  port: +PORT,
  apiKeyResend: KEY_RESEND_EMAIL,
  emailFromResend: EMAIL_FROM_RESEND_EMAIL,
  isDev: NODE_ENV === 'development',
  isProd: NODE_ENV === 'production',
  database: {
    //@ts-ignore
    type: TYPE,
    host: HOST,
    port: +PORT_DB,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
  },
}
