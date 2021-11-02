import "@pages/textColumn/style/text-column.less";

import IconFont from "@components/iconFont/IconFont";
import { Button, Card, Collapse, List } from "antd";
import React, { FC } from "react";

type RenderItem = (item: any, index: number) => React.ReactNode;
const TextColumn: FC = () => {
  // 新增栏目
  const AddMain: FC = React.memo(() => {
    return (
      <Button className="tc-add" type="dashed">
        <IconFont styleClass="iconadd1" iconClass="tc-a-icon" />
        新增栏目
      </Button>
    );
  });

  // list render
  const renderItem: RenderItem = (item: any) => {
    return (
      <List.Item className="tc-l-item">
        <Collapse className="tc-l-i-item">
          <Collapse.Panel
            key={item}
            header={<span className="tc-l-i-header">{item}</span>}
          >
            <div>jdk</div>
          </Collapse.Panel>
        </Collapse>
      </List.Item>
    );
  };

  return (
    <Card title="文本栏目" className="text-column">
      <AddMain />
      <List
        className="tc-list"
        dataSource={[1, 2, 3, 4]}
        renderItem={renderItem}
      />
    </Card>
  );
};

export default TextColumn;
