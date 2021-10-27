import React, { FC } from "react";

/**
 * 图标组件
 * */
type IconFontVO = {
  iconClass: string;
  styleClass: string;
};

const IconFont: FC<Partial<IconFontVO>> = (props) => {
  const { iconClass, styleClass } = props;

  return <span className={`iconfont ${iconClass} ${styleClass}`} />;
};

export default React.memo(IconFont);
