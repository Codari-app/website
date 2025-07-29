import axiosInstance from './axiosInstance';

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
}

export const sendContact = async (payload: ContactPayload) => {
  const response = await axiosInstance.post('/api/contact', payload);
  return response.data;
};
