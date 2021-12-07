import { useSetState } from "ahooks";
import { Button } from "antd";
import React, { FC, useCallback } from "react";

const CallbackCom: FC = () => {
  const [state, setState] = useSetState<any>({});

  const handleClick = useCallback(() => {
    setState({
      count: (state.count += 1),
    });
  }, [setState, state]);

  return (
    <div>
      CallbackCom:
      <input type="text" value={state.count} />
      <Button onClick={handleClick}>点击</Button>
    </div>
  );
};

export default CallbackCom;
