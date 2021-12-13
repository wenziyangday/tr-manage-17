import "@labs/useHooks/style/use-hooks.less";

import CallbackHook from "@labs/useHooks/components/CallbackHook";
import ContextHook from "@labs/useHooks/components/ContextHook";
import EffectHook from "@labs/useHooks/components/EffectHook";
import LayoutEffectHook from "@labs/useHooks/components/LayoutEffectHook";
import MemoHook from "@labs/useHooks/components/MemoHook";
import ReducerHook from "@labs/useHooks/components/ReducerHook";
import RefHook from "@labs/useHooks/components/RefHook";
import StateHook from "@labs/useHooks/components/StateHook";
import { logInfo } from "@utils/utils";
import { Card, Divider } from "antd";
import React, { FC, useEffect } from "react";

const UseHooks: FC = () => {
  useEffect(() => {
    logInfo("UseHooks");
  }, []);

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
      <Divider />

      {/** useContext */}
      <ContextHook />
      <Divider />

      {/** useState */}
      <StateHook />
      <Divider />

      {/** useMemo */}
      <MemoHook />
      <Divider />

      {/** useCallback */}
      <CallbackHook />
      <Divider />

      {/** useReducer */}
      <ReducerHook />
      <Divider />

      {/** useEffect */}
      <EffectHook />
      <Divider />

      {/** useLayoutEffect */}
      <LayoutEffectHook />
      <Divider />
    </Card>
  );
};

export default UseHooks;
