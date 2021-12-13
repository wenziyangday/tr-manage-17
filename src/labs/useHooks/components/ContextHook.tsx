import ContextSon from "@labs/useHooks/components/ContextSon";
import MyContext from "@labs/useHooks/context/context";
import { useSetState } from "ahooks";
import { Button } from "antd";
import React, { FC, useCallback, useEffect } from "react";

/**
 * @description context： useContext和createContext的基本用法
 * */
type PersonVO = {
  name: string;
  age: number;
  callback: () => void;
};

const defaultPerson: PersonVO = {
  name: "张三",
  age: 1000,
  callback: () => {
    return null;
  },
};

const ContextHook: FC = () => {
  const [state, setState] = useSetState<Partial<PersonVO>>(defaultPerson);

  const updateState = useCallback(() => {
    setState({
      name: `${Math.random()}`,
      age: Math.random() * 1000,
    });
  }, [setState]);

  useEffect(() => {
    state.callback = updateState;
  }, [state, updateState]);

  return (
    <div className="context-hook">
      <h3>2.useContext和createContext使用方法</h3>
      <dl>
        <dt>描述：</dt>
        <dd>A.跨组件之间的状态共享，但是需要进行顶层状态维护</dd>
      </dl>
      <dl>
        <dt>
          示例1.跨组件间的数据共享{" "}
          <Button onClick={updateState}>更新Person</Button>
        </dt>
        <MyContext.Provider value={state}>
          <ContextSon />
        </MyContext.Provider>
      </dl>
    </div>
  );
};
export default ContextHook;
