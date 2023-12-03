export interface IContactForm {
  email: string;
  name: string;
  message: string;
}

export interface IContactResponseData {
  success: boolean;
  statusCode: number;
  message: string;
}
