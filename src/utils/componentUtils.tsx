import "@utils/style/component-utils.less";

import { OptsVO } from "@common/commonVO";
import { Opts, OptsCN } from "@common/constant";
import IconFont from "@components/iconFont/IconFont";
import { Modal } from "antd";
import React from "react";

export const stateFormat: any = (state: number) => {
  switch (state) {
    case 1:
      return (
        <div className="state-format green">
          <i />
          正常
        </div>
      );
    case 2:
      return (
        <div className="state-format red">
          <i />
          禁用
        </div>
      );
    case -1:
      return (
        <div className="state-format deleted">
          <i />
          删除
        </div>
      );
    default:
      return (
        <div className="state-format">
          <i />
          未知类型
        </div>
      );
  }
};

// 确认框
export const showConfirmModal = (
  optType: OptsVO,
  onOk?: <T>(val: T) => void
) => {
  const { confirm } = Modal;
  confirm({
    title: `你确定要${OptsCN[optType]}当前栏目/内容吗？`,
    icon: (
      <IconFont
        iconClass="iconbolt-solid"
        styleClass={`${
          optType === Opts.delete ? "icon-iconbolt-red" : "icon-iconbolt-orange"
        }`}
      />
    ),
    content: `当前栏目已经维护的内容都有可能被 ${OptsCN[optType]}。`,
    onOk,
  });
};
