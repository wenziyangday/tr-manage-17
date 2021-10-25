import "@components/loading/style/loading.less";

import React, { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="loading">
      <div className="inner-loading">
        <div className="icon">
          <span className="iconfont iconloading" />
        </div>
        Loading, lazy loading
      </div>
    </div>
  );
};

export default Loading;
