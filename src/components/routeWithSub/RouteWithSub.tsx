import RouteVO from "@routes/route";
import React from "react";
import { Route } from "react-router-dom";

type RouteWithSubVO = (route: RouteVO) => JSX.Element;

/**
 * @description 下级路由渲染
 * */
const RouteWithSub: RouteWithSubVO = (route: RouteVO) => {
  const { path, uniqueKey, exact, routes } = route;

  return (
    <Route
      path={path}
      key={uniqueKey}
      exact={exact}
      render={(props) => <route.component props={props} routes={routes} />}
    />
  );
};

export default RouteWithSub;
