import MemoCom from "@labs/useHooks/components/MemoCom";
import { logInfo } from "@utils/utils";
import { Button } from "antd";
import React, { FC, useMemo, useState } from "react";

/**
 * @description useMemo 常规用法
 * */
const MemoHook: FC = () => {
  const [state, setState] = useState<any>({});

  logInfo("re-render-1");
  const memoCom = useMemo(() => {
    logInfo("re-render-2");
    return <div>memoCom</div>;
  }, []);

  return (
    <div>
      <h3>4.useMemo使用方法</h3>
      <dl>
        <dt>描述：</dt>
        <dd>
          A.返回一个memoized的 <em>值</em>
        </dd>
        <dd>
          B.把创建的函数或者依赖的数组作为参数传入 useMemo,它仅会在
          <em>某个依赖项改变</em>时才会重新计算一个memoized的值
        </dd>
        <dd>
          C.关于useMemo调用两次的问题进行说明：StrictMode 在 development mode
          下一些 hooks 的回调会调用两次以确保没有副作用
        </dd>
      </dl>
      <h3>React.memo</h3>
      <dl>
        <dt>描述：</dt>
        <dd>
          A.如果你的组件在相同 props
          的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo
          中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React
          将跳过渲染组件的操作并直接复用最近一次渲染的结果
        </dd>
        <dd>B.React.memo 仅检查 props 变更</dd>
        <dd>
          C.如果函数组件被 React.memo 包裹，且其实现中拥有 useState，useReducer
          或 useContext 的 Hook，当 state 或 context 发生变化时，它仍会重新渲染
        </dd>
        <dd>
          D.默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现
        </dd>
      </dl>
      <dl>
        <dt>
          示例1：
          <div>useMemo: {memoCom}</div>
          <Button
            onClick={() => {
              setState({
                name: `${Math.random()}`,
              });
            }}
          >
            button
          </Button>
        </dt>
      </dl>
      <dl>
        <dt>描述：</dt>
        <dd>
          参考链接：https://zh-hans.reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
        </dd>
      </dl>

      <dl>
        <dt>示例2：React.memo</dt>
        <dd>
          <MemoCom name={state.name} />
        </dd>
      </dl>
    </div>
  );
};

export default MemoHook;
