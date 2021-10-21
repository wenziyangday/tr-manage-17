import axios, { Axios } from "axios";
import { REACT_APP_API } from "@/common/constant";

interface InterceptorVO {
  instance: undefined | Axios;

  getInstance(): undefined | Axios;

  initInterceptor(): void;
}

export default class Interceptor implements InterceptorVO {
  instance: Axios | undefined;

  constructor() {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL: `${REACT_APP_API}/api`,
        timeout: 20 * 1000,
      });
    }
    this.initInterceptor();
  }

  getInstance() {
    return this.instance;
  }

  initInterceptor() {
    this.instance?.interceptors.request.use(
      (config: any) => {
        const { headers } = config;
        headers.authorization =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjEyZGVjNjllNTA4NmM5NjYxN2M1ZGQxIiwiaWF0IjoxNjM0ODA1OTY1LCJleHAiOjE2MzU0MTA3NjV9.PUKgkDgzevj5wntSijKsB-VB13R_O30K5oUBK3G8rXc";
        return config;
      },
      (error) => {
        return error;
      }
    );

    this.instance?.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
}
