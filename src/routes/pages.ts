import RouteVO from "@routes/route";
import React from "react";

const pages: RouteVO[] = [
  {
    path: "/",
    title: "首页",
    uniqueKey: "Home",
    component: React.lazy(() => import("@pages/Home")),
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
    path: "/about",
    title: "关于我们",
    uniqueKey: "About",
    component: React.lazy(() => import("@pages/About")),
    exact: true,
    routes: [],
  },
  {
    path: "/others",
    title: "其他",
    uniqueKey: "Others",
    component: React.lazy(() => import("@pages/Others")),
    exact: true,
    routes: [],
  },
];

export default pages;
