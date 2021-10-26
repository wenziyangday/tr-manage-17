import React from "react";

export default [
  {
    path: "/labs",
    title: "React.memo",
    uniqueKey: "Labs",
    component: React.lazy(() => import("@labs/memo/Memo")),
    exact: true,
    routes: [
      {
        path: "/Memo",
        title: "React.memo",
        uniqueKey: "Labs",
        component: React.lazy(() => import("@labs/memo/Memo")),
        exact: true,
        routes: [],
      },
    ],
  },
];
