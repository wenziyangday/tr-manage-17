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
    ],
  },
];
