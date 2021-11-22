import React from "react";

export default [
  {
    path: "/labs",
    title: "实验室LAB",
    uniqueKey: "Labs",
    component: React.lazy(() => import("@labs/memo/Memo")),
    exact: true,
    routes: [
      {
        path: "/Memo",
        title: "Memo",
        uniqueKey: "Memo",
        component: React.lazy(() => import("@labs/memo/Memo")),
        exact: true,
        routes: [],
      },
      {
        path: "/hooks-dependency",
        title: "依赖项",
        uniqueKey: "HooksDependency",
        component: React.lazy(() => import("@labs/dependency/Dependency")),
        exact: true,
        routes: [],
      },
      {
        path: "/communication",
        title: "通信",
        uniqueKey: "Communication",
        component: React.lazy(
          () => import("@labs/communication/Communication")
        ),
        exact: true,
        routes: [],
      },
      {
        path: "/use-hooks",
        title: "hooks",
        uniqueKey: "UseHooks",
        component: React.lazy(() => import("@labs/useHooks/UseHooks")),
        exact: true,
        routes: [],
      },
    ],
  },
  {
    path: "/todo",
    title: "Todo",
    uniqueKey: "Todo",
    component: React.lazy(() => import("@labs/todo/Todo")),
    exact: true,
    routes: [],
  },
];
