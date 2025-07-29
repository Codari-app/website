import { Router } from "express";
import { SendContactController } from "./controllers/SendContactController";

const contactRoutes = Router();
const sendContactController = new SendContactController();

contactRoutes.post("/", (req, res) => sendContactController.handle(req, res));

export { contactRoutes };
