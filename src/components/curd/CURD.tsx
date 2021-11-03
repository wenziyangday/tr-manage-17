import "@components/curd/style/curd.less";

import IconFont from "@components/iconFont/IconFont";
import { Menu, Tooltip } from "antd";
import React, { FC, useCallback } from "react";

type OptItemVO = {
  text: string;
  icon: string;
  key: "add" | "edit" | "restart" | "disable" | "delete";
};

type ICurdVO = {
  /** 是否显示新增 */
  showAdd: boolean;
  /** 启禁用 */
  restartOrDisable: "restart" | "disable";
  /** 图标或者文字 */
  iconOrText: "icon" | "text";
  add: () => void;
  edit: () => void;
  restart: () => void;
  disable: () => void;
  delete: () => void;
};

/**
 * @description 项目中的增删改查 启、禁用
 * */
const opts: OptItemVO[] = [
  {
    text: "新增",
    icon: "iconadd1",
    key: "add",
  },
  {
    text: "编辑",
    icon: "iconeditor",
    key: "edit",
  },
  {
    text: "启用",
    icon: "iconrefresh",
    key: "restart",
  },
  {
    text: "禁用",
    icon: "iconjinyongzhanghao",
    key: "disable",
  },
  {
    text: "删除",
    icon: "iconminus",
    key: "delete",
  },
];
const CURD: FC<Partial<ICurdVO>> = (props) => {
  const {
    showAdd = true,
    restartOrDisable = "restart",
    iconOrText,
    add,
    edit,
    restart,
    disable,
    delete: deleteItem,
  } = props;
  let computeOpts: Partial<OptItemVO>[] = opts;

  /** 处理启禁用取其中一个 */
  computeOpts = computeOpts.filter((x) => x.key !== restartOrDisable);

  /** 新增是否存在 */
  if (!showAdd) {
    computeOpts = computeOpts.filter((x) => x.key !== "add");
  }
  /** icon点击事件 */
  const iconOnClick = useCallback((e) => {
    e.stopPropagation();
    const { key } = e.currentTarget.dataset;
    keyCurd(key);
  }, []);

  /** menu点击事件 */
  const onClick = useCallback(({ key, domEvent }) => {
    domEvent.stopPropagation();
    keyCurd(key);
  }, []);

  /** 增、删、改、启、禁用 */
  const keyCurd = (key: string) => {
    if (key === "add" && add) add();

    if (key === "edit" && edit) edit();

    if (key === "restart" && restart) restart();

    if (key === "disable" && disable) disable();

    if (key === "delete" && deleteItem) deleteItem();
  };

  return iconOrText === "icon" ? (
    <div className="curd">
      {computeOpts.map((x) => {
        return (
          <Tooltip placement="top" title={x.text} key={x.key}>
            <div className="curd-wrap" data-key={x.key} onClick={iconOnClick}>
              <IconFont iconClass={x.icon} styleClass="curd-w-icon" />
            </div>
          </Tooltip>
        );
      })}
    </div>
  ) : (
    <Menu
      mode="horizontal"
      className="curd"
      selectable={false}
      overflowedIndicator={<div className="curd-more">更多</div>}
      onClick={onClick}
    >
      {computeOpts.map((x) => {
        return (
          <Menu.Item className="curd-item" key={x.key}>
            {x.text}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default CURD;
