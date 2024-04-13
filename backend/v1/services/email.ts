import { Resend } from 'resend'

export class ResendService {
  constructor(private readonly resend = new Resend('')) {}

  async sendEmail(email: string, subject: string, html: string) {
    await this.resend.emails.send({
      from: 'BACKEND_EMAIL_FROM_RESEND_EMAIL',
      to: email,
      subject,
      html,
    })
  }
}
