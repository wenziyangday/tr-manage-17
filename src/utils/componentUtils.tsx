import "@utils/style/component-utils.less";

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

export const aa = <div />;
