import labs from "@routes/labs";
import pages from "@routes/pages";
import RouteVO from "@routes/route";
import React from "react";

/**
 *  @description 容器路由必须在最后一个
 * */
export const wrapRoutes: RouteVO[] = [
  {
    path: "/login",
    title: "登录",
    uniqueKey: "Login",
    component: React.lazy(() => import("@pages/login/Login")),
  },
  {
    path: "",
    title: "容器",
    uniqueKey: "WrapLayout",
    component: React.lazy(() => import("@components/wrapLayout/WrapLayout")),
    routes: [...pages, ...labs],
  },
];

/**
 * @param arr RouteVO[] 路由数组
 * @param result RouteVO[] 遍历后的结果
 * @description 递归遍历拥有下级路由的路由
 * */
const recursion = (arr: RouteVO[], result: RouteVO[]) => {
  const len = arr.length;
  let i = 0;
  while (i < len) {
    const { path, routes } = arr[i];
    result.push(arr[i]);

    if (routes) {
      const newArr = routes.map((x) => {
        const pathSub = x.path;
        return {
          ...x,
          path: `${path}${pathSub}`,
        };
      });
      recursion(newArr, result);
    }
    i += 1;
  }
};

/**
 * @param arr RouteVO[] 路由数组
 * @return 降级后的路由
 * */
const routesHandler = (arr: RouteVO[]) => {
  const flatRoutes: RouteVO[] = [];
  const [login, item] = arr;
  const { routes } = item;
  recursion(routes || [], flatRoutes);

  return [
    login,
    {
      ...item,
      routes: flatRoutes,
    },
  ];
};

export const flatRoutes = routesHandler(wrapRoutes);
