import { CommonObjVO } from "@common/commonVO";
import React from "react";

/**
 * @description 渲染单元
 * */
export type RenderItem = (item: any, index: number) => React.ReactNode;

/**
 * @description 详细内容数据类型
 * */
export type TCItemVO = {
  columnName: string;
  count: number;
  enName: string;
  pId: string;
  sortNum: number;
  state: number;
  shortDesc: string;
  urls: any[];
} & CommonObjVO;

/**
 * @description TextColumn 状态管理
 * */
export type ITextColumnState = {
  tcList: TCItemVO[];
};
