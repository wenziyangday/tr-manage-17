import { Card, List } from "antd";
import React, { FC } from "react";

const Todo: FC = () => {
  return (
    <Card title="每周todo 11.15~11.21">
      <h1>1.hooks：要知道用法，具体效果，demo</h1>
      <List>
        <List.Item.Meta title="useRef" description="用法：" />
        <List.Item.Meta title="useContext" description="用法：" />
        <List.Item.Meta title="useState" description="用法：" />
        <List.Item.Meta title="useReducer" description="用法：" />
        <List.Item.Meta title="useEffect" description="用法：" />
        <List.Item.Meta title="useLayoutEffect" description="用法：" />
        <List.Item.Meta title="useMemo" description="用法：" />
        <List.Item.Meta title="useCallback" description="用法：" />
      </List>
      <h1>2.hooks的依赖收集规则</h1>
      <List>
        <List.Item.Meta title="useEffect" description="用法：" />
        <List.Item.Meta title="useMemo" description="用法：" />
        <List.Item.Meta title="useCallback" description="用法：" />
      </List>
    </Card>
  );
};

export default Todo;
