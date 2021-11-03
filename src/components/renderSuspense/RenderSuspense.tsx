import Loading from "@components/loading/Loading";
import RouteWithSub from "@components/routeWithSub/RouteWithSub";
import { flatRoutes } from "@routes/wrapRoutes";
import React, { FC, Suspense } from "react";
import { Switch } from "react-router-dom";

type IRenderSuspenseVO = Partial<{
  isOutsideAdmin: boolean;
}>;

/**
 * @description 路由懒加载的suspense
 * */
const RenderSuspense: FC<IRenderSuspenseVO> = (props) => {
  const { isOutsideAdmin } = props;

  const RenderRoutes = (() => {
    let [, { routes }] = flatRoutes;
    if (isOutsideAdmin) routes = flatRoutes;
    return routes?.map((route) => RouteWithSub(route));
  })();

  return (
    <Suspense fallback={<Loading />}>
      <Switch>{RenderRoutes}</Switch>
    </Suspense>
  );
};

export default React.memo(RenderSuspense);
