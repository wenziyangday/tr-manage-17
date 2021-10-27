import "@components/wrapLayout/style/render-menu.less";

import IconFont from "@components/iconFont/IconFont";
import RouteVO from "@routes/route";
import { wrapRoutes } from "@routes/wrapRoutes";
import { Menu } from "antd";
import React, { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";

const RenderMenu: FC = () => {
  const history = useHistory();

  // menu 多级路由处理 TODO 无限级
  const renderRootRoutes = useCallback(() => {
    const [, admin] = wrapRoutes;
    const { routes: arr = [] } = admin;
    const domArr: any[] = [];
    for (let i = 0; i < arr.length; i += 1) {
      const domArrKey: RouteVO = arr[i];
      const { routes = [], title, path, showInNav } = domArrKey;
      const mapRoutes = routes
        .filter((x: RouteVO) => x.path !== "*" && x.showInNav !== false)
        .map((x: RouteVO) => (
          <Menu.Item key={`${path}${x.path}`} className="item">
            {x.title}
          </Menu.Item>
        ));

      if (path !== "*" && showInNav !== false) {
        if (routes && routes.length && mapRoutes.length) {
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
    arr.forEach((x: string | null) => {
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
    </Menu>
  );
};

export default RenderMenu;
