import request from '@/utilities/request';

class ContactService {
  static sendContactMessage<T, D>(data: D) {
    return request<T, D>('POST', 'contact', data);
  }
}

export default ContactService;
