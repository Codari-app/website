import { Request, Response } from "express";
import { SendContactUseCase } from "../useCases/SendContactUseCase";
import { FakeMailService } from "../services/FakeMailService";

export class SendContactController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, phone } = req.body;

    const mailService = new FakeMailService();
    const useCase = new SendContactUseCase(mailService);

    try {
      await useCase.execute({ name, email, phone });
      return res.status(200).json({ message: "Mensagem enviada com sucesso." });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
