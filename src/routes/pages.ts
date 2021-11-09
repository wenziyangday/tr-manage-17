import RouteVO from "@routes/route";
import React from "react";

const pages: RouteVO[] = [
  {
    path: "/",
    title: "首页",
    uniqueKey: "Home",
    component: React.lazy(() => import("@pages/home/Home")),
    exact: true,
    routes: [],
  },
  {
    path: "/text-column",
    title: "文本栏目",
    uniqueKey: "TextColumn",
    component: React.lazy(() => import("@pages/textColumn/TextColumn")),
    exact: true,
    routes: [],
  },
  {
    path: "/user",
    title: "用户中心",
    uniqueKey: "User",
    showInNav: false,
    component: React.lazy(() => import("@pages/user/UserCenter")),
    exact: true,
    routes: [
      {
        path: "/center",
        title: "个人中心",
        uniqueKey: "UserCenter",
        showInNav: false,
        component: React.lazy(() => import("@pages/user/UserCenter")),
        exact: true,
        routes: [],
      },
      {
        path: "/setting",
        title: "个人设置",
        uniqueKey: "UserSetting",
        showInNav: false,
        component: React.lazy(() => import("@pages/user/UserSetting")),
        exact: true,
        routes: [],
      },
    ],
  },
];

export default pages;
