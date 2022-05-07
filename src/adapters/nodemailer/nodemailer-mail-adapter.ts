import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3ae27120012a59",
    pass: "df27e69c4cfd79"
  }
});

export class nodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Fedget <oi@fedget.com>',
      to: 'João <joao@gmail.com>',
      subject,
      html: body,
    })
  }
}