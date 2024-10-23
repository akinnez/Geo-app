import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

export const api = axios.create({
  headers: {
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: false,
});

axios.interceptors.request.use((config) => {
  config.headers['Cache-Control'] = 'no-cache';
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Access-Control-Allow-Headers'] = '*';
  return config;
});
axios.interceptors.response.use((config) => {
  config.headers['Cache-Control'] = 'no-cache';
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Access-Control-Allow-Headers'] = '*';
  return config;
});

export const get = <T>(
  url: string,
  params?: any
): Observable<AxiosResponse<T>> => {
  return new Observable((observer) => {
    api
      .get<T>(url, params)
      .then((response) => {
        observer.next(response);
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });
  });
};

export const post = <T>(
  url: string,
  data: object | [] | Array<object>
): Observable<AxiosResponse<T>> => {
  return new Observable((observer) => {
    api
      .post<T>(url, data)
      .then((response) => {
        observer.next(response);
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });
  });
};
