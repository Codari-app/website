import { useState } from 'react';
import * as contactApi from '../api/contactApi';

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendContact = async (data: contactApi.ContactPayload) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await contactApi.sendContact(data);
      setSuccess(true);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('Erro ao enviar mensagem');
      }
    } finally {
      setLoading(false);
    }
  };

  return { sendContact, loading, error, success };
};
