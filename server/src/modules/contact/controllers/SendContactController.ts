import { Request, Response } from "express";
import { z } from "zod";
import { SendContactUseCase } from "../useCases/SendContactUseCase";
import { NodemailerMailService } from "../services/NodemailerMailService.ts";

export class SendContactController {
  async handle(req: Request, res: Response): Promise<Response> {
    const schema = z.object({
      name: z.string().min(1, "Name is required."),
      email: z.string().email("Invalid email format."),
      phone: z
        .string()
        .regex(
          /^\(\d{2}\)\s\d{5}-\d{4}$/,
          "Phone must be in the format (99) 99999-9999."
        ),
    });

    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map((err) => ({
        field: err.path[0],
        message: err.message,
      }));

      return res.status(400).json({
        code: "incorrect_fields",
        message: "One or more fields are invalid.",
        errors,
      });
    }

    const { name, email, phone } = result.data;

    const mailService = new NodemailerMailService();
    const useCase = new SendContactUseCase(mailService);

    try {
      await useCase.execute({ name, email, phone });
      return res.status(200).json({ message: "Message sent successfully." });
    } catch (error: any) {
      return res.status(500).json({ error: "Internal server error." + error });
    }
  }
}
