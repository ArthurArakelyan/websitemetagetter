import { apiUrl } from '@/constants/url';

import { RequestMethodType } from './types';

const request = async <T = any, D = any> (method: RequestMethodType, url: string, data?: D): Promise<T> => {
  return fetch(`${apiUrl}${url}`, {
    method: method,
    body: data ? JSON.stringify(data) : undefined,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(`${method} ${url} ${error.message}`);

      return error.response;
    });
};

export default request;
