import "@labs/dependency/style/dependency.less";

import { useRequest, useSetState } from "ahooks";
import { Button, Card } from "antd";
import React, { FC, useCallback, useEffect } from "react";

/**
 * @description hooks的依赖项
 * */
const Dependency: FC = () => {
  const [state, setState] = useSetState<any>({});
  const { item = "", resArr = [] } = state;

  const delayPromise = useCallback((_item?: string) => {
    return new Promise((resolve, reject) => {
      try {
        const arr = new Array(10)
          .fill(10)
          .map((value, index) => `${_item}--${index}`);
        resolve(arr);
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  const { run: runDelay } = useRequest(delayPromise, { manual: true });

  const handleRun = useCallback(async () => {
    const res = await runDelay(item);
    setState({
      resArr: res,
    });
  }, [item, runDelay, setState]);

  useEffect(() => {
    handleRun().then();
  }, [handleRun]);

  const buttonClick = useCallback(() => {
    setState({
      item: Math.random(),
    });
  }, [setState]);

  return (
    <Card title="依赖项">
      <Button onClick={buttonClick}>点击变更Item {item}</Button>
      {resArr.map((_x: string) => (
        <div key={_x}>{_x}</div>
      ))}
    </Card>
  );
};

export default Dependency;
