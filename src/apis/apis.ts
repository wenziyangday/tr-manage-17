import { TCItemVO } from "@pages/textColumn/types/textColumn";

import Request from "@/apis/request";

interface ApisVO {
  http: Request | undefined;
}

class Apis implements ApisVO {
  http: Request | undefined;

  constructor() {
    if (!this.http) {
      this.http = new Request();
    }
  }

  /** 用户信息 */
  getUserInfo = (params?: any) => {
    return this.http?.getD("/user/info", params);
  };

  /** 登录 */
  postLogin = (params?: any) => {
    return this.http?.postD("/user/login", params);
  };

  /** 栏目信息 */
  getTextCol = (params?: any) => {
    return this.http?.getD("/column/query", params);
  };

  /** 栏目信息序号 */
  getTextColSortNo = (params?: any) => {
    return this.http?.getD("/column/sort-number", params);
  };

  /** 新增栏目信息 */
  createTextCol = (
    params?: Pick<TCItemVO, "sortNum" | "columnName" | "shortDesc" | "urls">
  ) => {
    return this.http?.postD("/column/create", params);
  };

  /** 修改栏目信息 */
  updateTextCol = (
    params?: Pick<TCItemVO, "sortNum" | "columnName" | "shortDesc" | "urls">
  ) => {
    return this.http?.postD("/column/update", params);
  };

  /** 禁用栏目信息 */
  disableTextCol = (params: { id: string }) => {
    return this.http?.postD("/column/disable", params);
  };

  /** 启用栏目信息 */
  restartTextCol = (params: { id: string }) => {
    return this.http?.postD("/column/restart", params);
  };

  /** 删除栏目信息 */
  deleteTextCol = (params: { id: string }) => {
    return this.http?.postD("/column/delete", params);
  };
}

export default new Apis();
