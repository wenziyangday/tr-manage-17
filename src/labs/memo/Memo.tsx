import SubMemo from "@labs/memo/components/SubMemo";
import { useSetState } from "ahooks";
import { Button, Card, Divider } from "antd";
import React, { FC, useCallback } from "react";

const Memo: FC = () => {
  const [state, setState] = useSetState<any>({});
  let { count = 0 } = state;
  // console.log("memo");
  return (
    <Card title="Memo">
      memo {count}
      <div>
        <h4>验证子组件中使用memo 和不使用memo的区别</h4>
        <Button
          onClick={() => {
            setState({
              count: (count += 1),
            });
          }}
        >
          点击
        </Button>
        <Divider />
        <h4>不使用/使用useCallback 比较差异</h4>
        <SubMemo
          handleClick={useCallback(() => {
            setState({
              count: (count += 1),
            });
          }, [])}
        />
      </div>
    </Card>
  );
};

export default Memo;
