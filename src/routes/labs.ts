import React from "react";

export default [
  {
    path: "/labs",
    title: "实验室",
    uniqueKey: "Labs",
    component: React.lazy(() => import("@pages/Home")),
    exact: true,
    routes: [],
  },
];
