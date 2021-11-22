import "@labs/dependency/style/dependency.less";

import { useSetState } from "ahooks";
import { Card } from "antd";
import React, { FC } from "react";

const listDemo = Array(1000)
  .fill(1000)
  .map((x, index) => {
    return {
      name: `张三${index}`,
      key: `${index}`,
    };
  });

/**
 * @description hooks的依赖项
 * */
const Dependency: FC = () => {
  const [state, setState] = useSetState<any>({});
  const { activeOne = "" } = state;

  const onclick = (e: any) => {
    setState({
      activeOne: e.target.dataset.key,
    });
  };

  return (
    <Card title="依赖项">
      <div className="dependency" onClick={onclick}>
        {activeOne}
        {listDemo.map((x) => {
          return (
            <div
              key={x.key}
              data-key={x.key}
              className={`${activeOne === x.key ? "active" : ""}`}
            >
              {x.key} {activeOne} {x.name}
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Dependency;
