import "@components/wrapLayout/style/render-breadcrumbs.less";

import { AnyObjVO } from "@common/commonVO";
import RouteVO from "@routes/route";
import { flatRoutes } from "@routes/wrapRoutes";
import { parseObj, parseUrl } from "@utils/utils";
import { Breadcrumb } from "antd";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";

type SearchVO = {
  id: string;
  title: string;
  pId: string;
  pTitle: string;
};

const RenderBreadcrumbs: FC = () => {
  const { location } = useHistory();
  const { pathname, search } = location;
  const [, { routes = [] }] = flatRoutes;
  const cnRoutes: AnyObjVO = {};
  const topPathname = `/${pathname.split("/")[1] ?? ""}`;

  // 将URL中的path 和 title 进行对照
  routes.forEach((route: RouteVO) => {
    const { path = "", title = "" } = route;
    cnRoutes[path] = {
      path,
      title,
    };
  });

  // 面包屑路由 数组
  const routeArr: string[] = ["/"];

  // url 分割
  const pathArr = pathname.split("/").map((path: string) => `${path}`);

  // 生成可展示实体路由 path
  pathArr.reduce((acc, b) => {
    const back = `${acc}/${b}`;
    routeArr.push(back);
    return back;
  });

  // 参数解析, 从而形成参数路由
  let searchObj: Partial<SearchVO> = {};
  if (search) {
    searchObj = parseUrl(decodeURIComponent(search));
  }
  const { id, title, pId, pTitle } = searchObj;
  let paramsArr: Partial<SearchVO>[] = [];
  if (pId && pTitle && id && title) {
    paramsArr = [
      {
        id,
        title,
        pId,
        pTitle,
      },
      {
        id: pId,
        title: pTitle,
      },
    ];
  } else if (id && title) {
    paramsArr = [
      {
        id,
        title,
      },
    ];
  }

  // 处理新增页面的路由问题
  if (title === "新增") {
    paramsArr = [
      {
        title: "新增",
        pId,
        pTitle,
      },
      {
        id: pId,
        title: pTitle,
      },
    ];
  }

  // 最终数组
  const finalRouteArr: any[] = [];
  routeArr.reverse().forEach((item, index) => {
    if (paramsArr[index]) {
      finalRouteArr.push(item + parseObj(paramsArr[index]));
    } else {
      finalRouteArr.push(item);
    }
  });

  // 渲染面包屑单元
  const renderItem = finalRouteArr.reverse().map((route) => {
    if (cnRoutes[route]) {
      return (
        <Breadcrumb.Item key={route}>
          <a href={cnRoutes[route].path}>{cnRoutes[route].title}</a>
        </Breadcrumb.Item>
      );
    }
    const { title: rTitle } = parseUrl(route);
    return (
      <Breadcrumb.Item key={route}>
        <a href={route}>{rTitle}</a>
      </Breadcrumb.Item>
    );
  });

  return topPathname !== "/" ? (
    <div className="render-breadcrumbs">
      <span>当前位置：</span>
      <Breadcrumb separator="&gt;">{renderItem}</Breadcrumb>
    </div>
  ) : (
    <></>
  );
};

export default RenderBreadcrumbs;
