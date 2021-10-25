import About from "@pages/About";
import Home from "@pages/Home";
import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

const WrapLayout: FC = () => {
  return (
    <>
      <h4>包裹容器</h4>
      <Switch>
        <Route path="/" key="home" component={Home} exact />
        <Route path="/about" key="about" component={About} exact />
      </Switch>
    </>
  );
};
export default WrapLayout;
