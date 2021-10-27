import "@components/wrapLayout/style/render-logo.less";

import React, { FC } from "react";

const RenderLogo: FC = () => {
  return <div className="render-logo">Logo</div>;
};

export default React.memo(RenderLogo);
