import "@labs/useHooks/style/use-hooks.less";

import RefHook from "@labs/useHooks/components/RefHook";
import { Card, Divider } from "antd";
import React, { FC } from "react";

const UseHooks: FC = () => {
  return (
    <Card title="hooks 的使用方法" className="use-hooks">
      <dl>
        <dt>组件的生命周期：</dt>
        <dd>
          A.创建组件到挂载到DOM阶段，初始化props以及state，根据state 和 props
          共同构建DOM
        </dd>
        <dd>B.组件依赖的props以及state状态发生变更，触发更新</dd>
        <dd>C.销毁组件</dd>
      </dl>
      <Divider />

      {/** useRef */}
      <RefHook />
    </Card>
  );
};

export default UseHooks;
