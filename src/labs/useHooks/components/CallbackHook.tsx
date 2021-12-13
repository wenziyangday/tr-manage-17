import CallbackCom from "@labs/useHooks/components/CallbackCom";
import { logInfo } from "@utils/utils";
import { Button } from "antd";
import React, { FC, useCallback, useState } from "react";

/**
 * @description useCallback 常规用法
 * */
const CallbackHook: FC = () => {
  const [state, setState] = useState<any>({});
  const { name, age } = state;

  const handleClick = useCallback(() => {
    logInfo("CallbackHook-handleClick");
    setState({
      name: Math.random(),
      age: parseInt(`${Math.random() * 100}`, 10),
    });
  }, []);

  const Age = useCallback(() => {
    logInfo("CallbackHook-Age");
    return <div>callbackAge: {age}</div>;
  }, [age]);

  return (
    <div>
      <h3>5.useCallback基本用法</h3>
      <dl>
        <dt>描述：</dt>
        <dd>
          A.返回一个memoized <em>回调函数</em>
        </dd>
        <dd>
          B.把内联回调函数及依赖项数组作为参数传入
          useCallback，它将返回该回调函数的memoized版本，该回调函数仅在某个依赖项改变时才会更新
        </dd>
        <dd>
          C.当你把回调函数传递给经过优化的并使用 <em>引用相等性</em>
          去避免非必要的渲染的子组件,将会非常有用
        </dd>
        <dd>D.所有回调函数中引用的值都应该出现在依赖项数组中</dd>
      </dl>
      <dl>
        <dt>示例1.基本感受</dt>
        <dd>
          <Button onClick={handleClick}>点击</Button> name: {name} age: {age}
        </dd>
        <dd>{Age()}</dd>
        <dd>
          <CallbackCom />
        </dd>
      </dl>
    </div>
  );
};

export default CallbackHook;
