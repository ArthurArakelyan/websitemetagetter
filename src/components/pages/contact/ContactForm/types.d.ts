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

export interface IContactPayloadData extends IContactForm {
  title: string;
}
