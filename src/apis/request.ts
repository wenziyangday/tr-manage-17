import { Axios } from "axios";

import Interceptor from "@/apis/interceptors";

interface RequestVO {
  request: undefined | Axios;

  getD<T>(url: string, params: T): Promise<T>;

  postD<T>(url: string, data: T): Promise<T>;
}

export default class Request implements RequestVO {
  request: undefined | Axios;

  constructor() {
    const interceptor = new Interceptor();
    this.request = interceptor.getInstance();
  }

  getD<T>(url: string, params: T): Promise<T> {
    return new Promise<any>((resolve, reject) => {
      this.request
        ?.get(url, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  postD<T>(url: string, data: T): Promise<T> {
    return new Promise<any>((resolve, reject) => {
      this.request
        ?.post(url, data)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }
}
