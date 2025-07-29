import nodemailer from "nodemailer";
import { IMailService } from "./IMailService";

interface ContactData {
  name: string;
  email: string;
  phone: string;
}

export class NodemailerMailService implements IMailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  async sendContact({ name, email, phone }: ContactData): Promise<void> {
    const mailOptions = {
      from: `"Contato do Site" <${email}>`,
      to: process.env.SMTP_USER,
      subject: "Novo contato via formulário",
      text: `
        Você recebeu uma nova mensagem de contato:

        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
      `,
      html: `
        <h1>Novo contato via formulário</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
