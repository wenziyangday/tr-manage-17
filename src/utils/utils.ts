import { ParseObjVO, ParseStringVO } from "@utils/types/utils";
import { message } from "antd";
import dayjs from "dayjs";

/**
 * @param time string 或者 number 字符串
 * @return 返回一个参数对象
 * */
export const formatTime = (time: string | number) => {
  return dayjs(time).format("YYYY-MM-DD HH:mm:ss");
};

/**
 * @param uri string url 字符串
 * @return 返回一个参数对象
 * */
export const parseUrl: ParseStringVO = (uri: string) => {
  if (!uri) {
    message.warning("未传入url").then();
    return null;
  }

  const urlKey: string = uri.split("?")[1];
  const urlObj: any = {};

  if (urlKey && urlKey.indexOf("&") !== -1) {
    const keyVal = urlKey.split("&");
    keyVal.forEach((_item) => {
      const arr = _item.split("=");
      const [key, val] = arr;
      urlObj[key] = val;
    });
  }
  return urlObj;
};

/**
 * @param uri string url字符串
 * @eg a=100&b=op&c=uj
 * @return 返回一个参数对象 {a: 100, b: op, c: uj}
 * */
export const parseUrl2 = (uri: string) => {
  return Object.fromEntries(new URLSearchParams(uri));
};

/**
 * @param obj 对象结构
 * @return str url结构数据
 * @description 将一个对象转成url的结构
 * */
export const parseObj: ParseObjVO = (obj) => {
  let url;
  const keys: string[] = Object.keys(obj);
  url = keys.reduce((a, b) => `${a}${b}=${obj[b]}&`);
  url = `?${url}`;
  return url.slice(0, url.length - 1);
};

/**
 * @param arg 参数
 * @description console.log的封装
 * */
export const logInfo = (...arg: any[]) => {
  // eslint-disable-next-line no-console
  console.log.call(null, ...arg);
};
