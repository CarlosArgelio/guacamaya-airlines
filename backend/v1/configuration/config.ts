import dotenv from 'dotenv'

dotenv.config({
  path: '.env',
})

interface Config {
  apiKeyResend: string
  emailFromResend: string
}

export const config = {
  apiKeyResend: process.env.KEY_RESEND_EMAIL,
  emailFromResend: process.env.EMAIL_FROM_RESEND_EMAIL,
}
