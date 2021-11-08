import {
  REACT_APP_API,
  REACT_APP_INIT_TOKEN,
  TOKEN,
  WHITELIST,
} from "@common/common";
import DataStorageUtil from "@utils/storage";
import { message } from "antd";
import axios, { Axios, AxiosResponse } from "axios";

interface InterceptorVO {
  instance: undefined | Axios;

  getInstance(): undefined | Axios;

  initInterceptor(): void;
}
interface BaseResultResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}
interface ResultResponse<T = unknown> extends AxiosResponse {
  data: BaseResultResponse<T>;
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
      (config) => {
        const { url, headers } = config;
        const storage: DataStorageUtil = new DataStorageUtil();
        const token = REACT_APP_INIT_TOKEN || storage.getValue(TOKEN);
        if (!token) {
          goLogin();
        }

        // 白名单
        if (!WHITELIST.includes(<string>url) && headers) {
          // 登录流程控制中，根据本地是否存在token判断用户的登录情况
          // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
          // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
          // token 失效 也要跳走
          headers.authorization = token;
        } else {
          goLogin();
        }

        return config;
      },
      (error) => {
        return error;
      }
    );

    this.instance?.interceptors.response.use(
      (response) => {
        const { status, data } = response as ResultResponse;

        // 处理网络非200状态 和 业务非200状态
        if (status !== 200 || data.code !== 200) {
          return errHandle(data.code, data.message);
        }

        return response.data;
      },
      (error) => {
        return error;
      }
    );
  }
}

/**
 * @param code {number}
 * @param msg {string}
 * @return boolean
 * @description 处理报错的error 这里是处理业务报错的
 * */
function errHandle(code: number, msg: string): boolean {
  const enumCode = `ERROR${code}`;
  switch (enumCode) {
    case enumCode:
      message.error(msg).then();
      break;
    default:
      message.warn("连接错误").then();
  }

  throw new Error("捕获错误并阻止代码继续执行下去");

  return false;
}

/**
 * @description 去登录
 * */
function goLogin(): void {
  // window.location.href = "/login";
}
