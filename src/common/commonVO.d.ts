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
