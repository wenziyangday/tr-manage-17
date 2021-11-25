import { logInfo } from "@utils/utils";
import React, { FC } from "react";

type IMemoComProps = {
  name: string;
};

const MemoCom: FC<IMemoComProps> = (props) => {
  const { name } = props;
  logInfo("MemoCom", name);
  return <div>MemoCom: {name}</div>;
};

function areEqual(prevP: any, nextP: any) {
  return prevP.name === nextP.name;
}

export default React.memo(MemoCom, areEqual);
