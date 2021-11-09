import "@pages/textColumn/style/render-collapse-panel.less";

import CURD from "@components/curd/CURD";
import RenderPics from "@pages/textColumn/components/RenderPics";
import { TCItemVO } from "@pages/textColumn/types/textColumn";
import { stateFormat } from "@utils/componentUtils";
import { Col, Row, Tree, TreeDataNode } from "antd";
import React, { FC, useCallback, useState } from "react";

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

interface DataNode {
  title: string;
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
}

const initTreeData: DataNode[] = [
  { title: "Expand to load", key: "0" },
  { title: "Expand to load", key: "1" },
  { title: "Tree Node", key: "2", isLeaf: true },
];

/**
 * @description 折叠窗体
 * */
const RenderCollapsePanel: FC<IRenderCollapsePanelVO> = (props) => {
  const [treeData, setTreeData] = useState(initTreeData);
  /** 类型推导 */
  const values = props as any;

  /** 渲染每一个所需要的字段 */
  const RenderContent = useCallback(() => {
    return contentVO.map((x) => {
      const { key = "", label } = x;
      let value = values[key];

      if (key === "state") {
        value = stateFormat(values[key]);
      }

      if (key === "urls") {
        value = <RenderPics pics={values[key]} />;
      }

      return (
        <div className="rcp-content" key={key}>
          <span className="rcp-c-label">{label}：</span>
          <span className="rcp-c-value">{value}</span>
        </div>
      );
    });
  }, [props])();
  const onLoadData = ({ key, children }: any) =>
    new Promise<void>((resolve) => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(() => {
        setTreeData((origin) =>
          updateTreeData(origin, key, [
            { title: "Child Node", key: `${key}-0` },
            { title: "Child Node", key: `${key}-1` },
          ])
        );

        resolve();
      }, 1000);
    });

  const titleRender = (dataNode: TreeDataNode) => {
    return (
      <div className="rcp-title">
        <div className="rcp-t-title">{dataNode.title}</div>
        <CURD />
      </div>
    );
  };

  function updateTreeData(
    list: DataNode[],
    key: React.Key,
    children: DataNode[]
  ): DataNode[] {
    return list.map((node) => {
      if (node.key === key) {
        return {
          ...node,
          children,
        };
      }
      if (node.children) {
        return {
          ...node,
          children: updateTreeData(node.children, key, children),
        };
      }
      return node;
    });
  }

  return (
    <div className="render-collapse-panel">
      <Row gutter={24}>
        <Col span={12}>
          <h4>详细内容:</h4>
          {RenderContent}
        </Col>
        <Col span={12}>
          <h4>子级栏目:</h4>
          <Tree
            blockNode
            treeData={treeData}
            showIcon={false}
            titleRender={titleRender}
            loadData={onLoadData}
          />
        </Col>
      </Row>
    </div>
  );
};

export default RenderCollapsePanel;
