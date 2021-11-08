import "@components/wrapLayout/style/render-tool.less";

import { TOKEN } from "@common/common";
import IconFont from "@components/iconFont/IconFont";
import DataStorageUtil from "@utils/storage";
import { Badge, Dropdown, Menu, Modal } from "antd";
import React, { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";

const DropMenu: FC = () => {
  const history = useHistory();
  const { confirm } = Modal;

  const logout = useCallback(
    async () =>
      confirm({
        content: "真的要退出吗？",
        centered: true,
        onOk() {
          const storage = new DataStorageUtil();
          storage.removeByKey(TOKEN);
          history.replace("/login");
        },
      }),
    []
  );

  return (
    <Menu>
      <Menu.Item
        key="个人中心"
        onClick={() => {
          history?.push("/user/center");
        }}
      >
        个人中心
      </Menu.Item>
      <Menu.Item
        key="个人收藏"
        onClick={() => {
          history?.push("/about");
        }}
      >
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="退出" onClick={logout}>
        退出
      </Menu.Item>
    </Menu>
  );
};

const RenderTool: FC = () => {
  return (
    <div className="render-tool">
      <div className="rt-item">
        <Badge
          count={5}
          offset={[0, 3]}
          showZero={false}
          className="rt-i-badge"
        >
          <IconFont iconClass="iconemail" styleClass="rt-i-mail" />
        </Badge>
      </div>
      <div className="rt-item">
        <Dropdown overlay={<DropMenu />}>
          <div>
            <IconFont iconClass="iconaccount" styleClass="rt-i-user" />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default React.memo(RenderTool);
