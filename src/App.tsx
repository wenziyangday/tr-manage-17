import "@/App.less";

import RenderSuspense from "@components/renderSuspense/RenderSuspense";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="app">
        <Router>
          <RenderSuspense isOutsideAdmin />
        </Router>
      </div>
    </ConfigProvider>
  );
};

export default App;
