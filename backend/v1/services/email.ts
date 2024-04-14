import { Resend } from 'resend'
import { config } from './../configuration/config'

const { apiKeyResend, emailFromResend } = config

const from = emailFromResend ? emailFromResend : ''

export class ResendService {
  constructor(private readonly resend = new Resend(apiKeyResend)) {}

  async sendEmail(email: string, subject: string, html: string) {
    await this.resend.emails.send({
      from,
      to: email,
      subject,
      html,
    })
  }
}
