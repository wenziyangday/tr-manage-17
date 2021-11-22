import React, { FC } from "react";

const RefButton: FC<any> = (props) => {
  const refs = React.createRef<any>();
  return <div ref={refs}>RefButton</div>;
};

export default RefButton;
