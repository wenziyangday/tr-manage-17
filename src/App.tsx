import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import WrapLayout from "@components/wrapLayout/WrapLayout";
import Login from "@/pages/login/Login";
import "@/App.less";

const App: FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="app">
        <Router>
          <Switch>
            <Route path="" exact component={WrapLayout} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </div>
    </ConfigProvider>
  );
};

export default App;
