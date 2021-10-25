import "@/App.less";

import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import RenderSuspense from "./components/renderSuspense/RenderSuspense";

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="app">
        <Router>
          <RenderSuspense isHaveLogin />
        </Router>
      </div>
    </ConfigProvider>
  );
};

export default App;
