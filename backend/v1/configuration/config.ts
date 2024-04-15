import dotenv from 'dotenv'

dotenv.config({
  path: '.env',
})

interface Config {
  port: string
  apiKeyResend: string
  emailFromResend: string
}

const PORT = process.env.PORT
const KEY_RESEND_EMAIL = process.env.KEY_RESEND_EMAIL
const EMAIL_FROM_RESEND_EMAIL = process.env.EMAIL_FROM_RESEND_EMAIL

if (!PORT) {
  throw new Error('PORT is not defined')
}

if (!KEY_RESEND_EMAIL) {
  throw new Error('KEY_RESEND_EMAIL is not defined')
}

if (!EMAIL_FROM_RESEND_EMAIL) {
  throw new Error('EMAIL_FROM_RESEND_EMAIL is not defined')
}

export const config: Config = {
  port: PORT,
  apiKeyResend: KEY_RESEND_EMAIL,
  emailFromResend: EMAIL_FROM_RESEND_EMAIL,
}
