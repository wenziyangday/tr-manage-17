import Loading from "@components/loading/Loading";
import RouteWithSub from "@components/routeWithSub/RouteWithSub";
import { flatRoutes } from "@routes/wrapRoutes";
import React, { FC, Suspense } from "react";
import { Switch } from "react-router-dom";

type IRenderSuspenseVO = Partial<{
  isHaveLogin: boolean;
}>;

const RenderSuspense: FC<IRenderSuspenseVO> = (props) => {
  const { isHaveLogin } = props;

  const RenderRoutes = (() => {
    let [, { routes }] = flatRoutes;
    if (isHaveLogin) routes = flatRoutes;
    return routes?.map((route) => RouteWithSub(route));
  })();

  return (
    <Suspense fallback={<Loading />}>
      <Switch>{RenderRoutes}</Switch>
    </Suspense>
  );
};

export default RenderSuspense;
