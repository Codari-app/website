import type { ContactFormData } from "../types/contactTypes";

const API_URL = import.meta.env.VITE_API;

export async function sendContact(data: ContactFormData) {
  const response = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar contato");
  }

  return response.json();
}
