export interface IMailService {
  sendContact(data: {
    name: string;
    email: string;
    phone: string;
  }): Promise<void>;
}
