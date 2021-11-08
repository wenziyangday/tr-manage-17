export type AnyObjVO = {
  [propName: string]: any;
};

/**
 * @description 对象的公共参数
 * */
export type CommonObjVO = {
  _id: string;
  createTime: string;
  modifiedTime: string;
};

/**
 * @description 项目常见操作英文枚举值
 * */
export type OptsVO = "add" | "edit" | "restart" | "disable" | "delete";

/**
 * @description 公共的分页变量
 * */
export type PaginationVO = {
  /** 总数 */
  total: number;
  /** 每页显示数量 */
  pageSize: number;
  /** 当前页码 */
  curPage: number;
};
