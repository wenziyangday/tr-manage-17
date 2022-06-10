import "@labs/points/style/points.less";

import CaptureValue from "@labs/points/components/CaptureValue";
import { Card } from "antd";
import React, { FC } from "react";

import useCountDown from "@/hooks/useCountDown";

const Points: FC = () => {
  const [sec] = useCountDown(100000);
  return (
    <Card className="points-list" title="收集点">
      <h6>倒计时：{sec}</h6>
      <h6>Portals: TODO</h6>
      <h6>hooks 中点击多次</h6>
      <CaptureValue />
    </Card>
  );
};

export default Points;
