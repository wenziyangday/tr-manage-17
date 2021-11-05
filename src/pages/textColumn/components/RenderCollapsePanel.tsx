import "@pages/textColumn/style/render-collapse-panel.less";

import { TCItemVO } from "@pages/textColumn/types/textColumn";
import { stateFormat } from "@utils/componentUtils";
import { Col, Row } from "antd";
import React, { FC, useCallback } from "react";

type IRenderCollapsePanelVO = Partial<Omit<TCItemVO, "_id" | "pId" | "count">>;
type ContentVO = {
  label: string;
  key: keyof IRenderCollapsePanelVO;
};

const contentVO: ContentVO[] = [
  {
    label: "序号",
    key: "sortNum",
  },
  {
    label: "栏目名称",
    key: "columnName",
  },
  {
    label: "英文名称",
    key: "enName",
  },
  {
    label: "状态",
    key: "state",
  },
  {
    label: "简介",
    key: "shortDesc",
  },
  {
    label: "缩略图",
    key: "urls",
  },
  {
    label: "创建时间",
    key: "createTime",
  },
  {
    label: "更新时间",
    key: "modifiedTime",
  },
];

/**
 * @description 折叠窗体
 * */
const RenderCollapsePanel: FC<IRenderCollapsePanelVO> = (props) => {
  /** 类型推导 */
  const values = props as any;
  const RenderContent = useCallback(() => {
    return contentVO.map((x) => {
      const { key = "", label } = x;
      return (
        <div className="rcp-content" key={key}>
          <span className="rcp-c-label">{label}：</span>
          <span className="rcp-c-value">
            {key === "state" ? stateFormat(values[key]) : values[key]}
          </span>
        </div>
      );
    });
  }, [])();
  return (
    <div className="render-collapse-panel">
      <Row gutter={24}>
        <Col span={12}>
          <h4>详细内容:</h4>
          {RenderContent}
        </Col>
        <Col span={12}>
          <h4>子级栏目:</h4>
        </Col>
      </Row>
    </div>
  );
};

export default RenderCollapsePanel;
