import { IMailService } from "./IMailService";

export class FakeMailService implements IMailService {
  async sendContact({
    name,
    email,
    phone,
  }: {
    name: string;
    email: string;
    phone: string;
  }) {
    console.log("📧 Enviando e-mail com os dados:");
    console.log(`Nome: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Contato: ${phone}`);
    // Aqui você pode plugar com Nodemailer ou outro serviço real depois
  }
}
