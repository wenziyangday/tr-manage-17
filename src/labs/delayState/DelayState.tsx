import "@labs/delayState/style/delay-state.less";

import { logInfo } from "@utils/utils";
import { useSetState } from "ahooks";
import { Card, Statistic } from "antd";
import React, { FC } from "react";

/**
 * @description hooks的依赖项
 * */
const DelayState: FC = () => {
  const [state, setState] = useSetState<any>({});
  const { count = 0 } = state;

  setTimeout(() => {
    logInfo(new Date());
    setState({
      count: (state.count += 1),
    });
  }, 1000);

  // setInterval(() => {
  //   const date = new Date().toLocaleTimeString();
  //   logInfo("date", date);
  //   setState({
  //     date,
  //   });
  // }, 1000);
  //
  // setInterval(() => {
  //   const random = Math.random();
  //   logInfo("sa", random);
  //   setState({
  //     sa: random,
  //   });
  // }, 50);
  //
  // setInterval(() => {
  //   const random = Math.random();
  //   logInfo("sad", random);
  //   setState({
  //     sad: random,
  //   });
  // }, 8000);
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  return (
    <Card title="延迟状态">
      <div>
        count: {count}
        <Statistic.Countdown
          value={deadline}
          valueStyle={{
            display: "block",
            width: 100,
            overflow: "hidden",
          }}
        />
      </div>
      date: {state.date} sa: {state.sa} sad: {state.sad}
    </Card>
  );
};

export default DelayState;
