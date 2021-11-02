import "@components/wrapLayout/style/render-menu.less";

import IconFont from "@components/iconFont/IconFont";
import RouteVO from "@routes/route";
import { wrapRoutes } from "@routes/wrapRoutes";
import { Menu } from "antd";
import React, { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";

const RenderMenu: FC = () => {
  const history = useHistory();

  // menu 多级路由处理
  const dom = (arr: any[], domArr: any[]) => {
    for (let i = 0; i < arr.length; i += 1) {
      const domArrKey: RouteVO = arr[i];
      const { routes = [], title, path, showInNav } = domArrKey;

      if (path !== "*" && showInNav !== false) {
        if (routes && routes.length > 0) {
          const mapRoutes = routes
            .filter((x: RouteVO) => x.path !== "*" && x.showInNav !== false)
            .map((x: RouteVO) => (
              <Menu.Item key={`${path}${x.path}`} className="item">
                {x.title}
              </Menu.Item>
            ));
          domArr.push(
            <Menu.SubMenu key={path} title={title}>
              {mapRoutes}
            </Menu.SubMenu>
          );
        } else {
          domArr.push(
            <Menu.Item key={path} className="item">
              {title}
            </Menu.Item>
          );
        }
      }
    }
  };

  const renderRootRoutes = useCallback(() => {
    const [, admin] = wrapRoutes;
    const { routes: arr = [] } = admin;
    const domArr: any[] = [];
    dom(arr, domArr);
    return domArr ?? <div />;
  }, [])();

  // menu路由切换事件
  const menuClick = useCallback((e) => {
    history.push(e.key);
  }, []);

  // 选中highlight
  const activeMenu = useCallback(() => {
    const { location } = history;
    const splitArr = location.pathname.split("/");
    const arr = splitArr.splice(1).map((x: string | null) => `/${x}`);
    let back = "";
    const backArr: string[] = [];
    arr.forEach((x: string) => {
      back += x;
      backArr.push(back);
    });
    return backArr;
  }, [])();

  return (
    <Menu
      className="render-menu"
      theme="dark"
      mode="horizontal"
      overflowedIndicator={<IconFont iconClass="iconellipsis" />}
      onClick={menuClick}
      selectedKeys={activeMenu}
    >
      {renderRootRoutes}
      <Menu.SubMenu key={1} title={1}>
        <Menu.Item key="1-1">1-1</Menu.Item>
        <Menu.Item key="1-2">1-2</Menu.Item>
        <Menu.Item key="1-3">1-3</Menu.Item>
        <Menu.SubMenu key="1-4" title="1-4">
          <Menu.Item key="1-4-1">1-4-1</Menu.Item>
          <Menu.Item key="1-4-2">1-4-2</Menu.Item>
          <Menu.Item key="1-4-3">1-4-3</Menu.Item>
          <Menu.SubMenu key="1-4-4" title="1-4-4">
            <Menu.Item key="1-4-4-1">1-4-4-1</Menu.Item>
            <Menu.Item key="1-4-4-2">1-4-4-2</Menu.Item>
            <Menu.Item key="1-4-4-3">1-4-4-3</Menu.Item>
            <Menu.Item key="1-4-4-4">1-4-4-4</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="1-4-5">1-4-5</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="1-5">1-5</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RenderMenu;
