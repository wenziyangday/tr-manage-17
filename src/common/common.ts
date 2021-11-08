/**
 * 网络服务API地址
 * */
import DataStorageUtil from "@utils/storage";

export const { REACT_APP_API } = process.env;

/**
 * @description 白名单
 * */
type WhiteList = string[];
export const WHITELIST: WhiteList = ["/user/login"];

/**
 * @description header token key
 * */
export const TOKEN = "authorization";

/**
 * @description 网络请求
 * */
export const ErrorNetwork: {
  [propName: string]: string;
} = {
  ERROR400: "请求出现错误",
  ERROR401: "没有提供认证信息",
  ERROR403: "请求的资源不允许访问",
  ERROR404: "请求的内容不存在",
  ERROR406: "请求的资源并不符合要求",
  ERROR407: "客户端请求超时",
  ERROR413: "请求体过大",
  ERROR415: "类型不正确",
  ERROR416: "请求的区间无效",
  ERROR500: "服务器错误",
  ERROR501: "请求还没有被实现",
  ERROR502: "网关错误",
  ERROR503: "服务暂时不可用",
  ERROR505: "请求的 HTTP 版本不支持",
};

/**
 * @description 项目中常见操作
 * */
export enum Opts {
  add = "add",
  edit = "edit",
  restart = "restart",
  disable = "disable",
  delete = "delete",
}

/**
 * @description 项目中常见操作的中英文对应
 * */
export enum OptsCN {
  add = "新增",
  edit = "编辑",
  restart = "启用",
  disable = "禁用",
  delete = "删除",
}

/**
 * @description 上传文件组件的公共配置
 * */
export const uploadProps = (function uploadProps() {
  const data = new DataStorageUtil();
  const token = data.getValue(TOKEN);
  const UPLOAD_URL = `${REACT_APP_API}/api/upload/`;
  return {
    name: "file",
    action: UPLOAD_URL,
    showUploadList: true,
    headers: {
      authorization: token,
    },
  };
})();
