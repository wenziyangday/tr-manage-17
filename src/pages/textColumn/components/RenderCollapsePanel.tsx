import "@pages/textColumn/style/render-collapse-panel.less";

import apis from "@apis/apis";
import CURD from "@components/curd/CURD";
import RenderPics from "@pages/textColumn/components/RenderPics";
import { TCItemVO } from "@pages/textColumn/types/textColumn";
import { stateFormat } from "@utils/componentUtils";
import { Col, Row, Tree, TreeDataNode } from "antd";
import React, { FC, useCallback, useState } from "react";

type IRenderCollapsePanelVO = Partial<Omit<TCItemVO, "pId" | "count">>;
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
  _id: string;
  columnName: string;
  title: string;
  key: string;
  isLeaf?: boolean;
  children?: DataNode[];
}

type IRenderCollapsePanelProps = IRenderCollapsePanelVO & {
  edit: any;
  add: any;
};

/**
 * @description 折叠窗体
 * */
const RenderCollapsePanel: FC<IRenderCollapsePanelProps> = (props) => {
  const { columnName, _id } = props;
  const [treeData, setTreeData] = useState([
    {
      title: columnName ?? "",
      key: _id ?? "",
      columnName,
      _id,
    },
  ]);
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

  const onLoadData = async ({ key, children }: any) => {
    const res = await apis.getSubTextCol({ pId: key });
    let _children: DataNode[] = [];

    if (res) {
      _children = res?.data?.map((x: any) => {
        return {
          ...x,
          title: x.columnName,
          key: x._id,
        };
      });
    }

    return new Promise<void>((resolve) => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(() => {
        setTreeData((origin: any) => {
          return updateTreeData(origin, key, _children);
        });

        resolve();
      }, 1000);
    });
  };
  const titleRender = (dataNode: TreeDataNode) => {
    const { key } = dataNode;
    return (
      <div className="rcp-title">
        <div className="rcp-t-title">{dataNode.title}</div>
        {_id !== key ? (
          <CURD
            edit={async () => {
              await props.edit(dataNode);
            }}
            add={async () => {
              await props.add(dataNode);
            }}
          />
        ) : (
          <></>
        )}
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
