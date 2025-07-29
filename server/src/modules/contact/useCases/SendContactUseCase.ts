import { SendContactDTO } from "../dtos/SendContactDTO";
import { IMailService } from "../services/IMailService";

export class SendContactUseCase {
  constructor(private mailService: IMailService) {}

  async execute(data: SendContactDTO): Promise<void> {
    const { name, email, phone } = data;

    if (!name || !email || !phone) {
      throw new Error("Todos os campos são obrigatórios.");
    }

    await this.mailService.sendContact({ name, email, phone });
  }
}
