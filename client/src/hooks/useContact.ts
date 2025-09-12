import { useState } from "react";
import { sendContact } from "../services/contactService";
import type { ContactFormData } from "../types/contactTypes";

export function useContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSendContact = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await sendContact(data);
      setSuccess(true);
    } catch (err: unknown) {
      if (typeof err === "object" && err !== null && "message" in err) {
        setError((err as { message?: string }).message || "Erro inesperado");
      } else {
        setError("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleSendContact, loading, error, success };
}
