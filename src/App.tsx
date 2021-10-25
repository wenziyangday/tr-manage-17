import "@/App.less";

import Fun from "@components/Fun";
import WrapLayout from "@components/wrapLayout/WrapLayout";
import Login from "@pages/login/Login";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="app">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/fun" exact component={Fun} />
            <Route path="" exact component={WrapLayout} />
          </Switch>
        </Router>
      </div>
    </ConfigProvider>
  );
};

export default App;
