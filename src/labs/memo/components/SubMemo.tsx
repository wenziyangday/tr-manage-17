import { Button } from "antd";
import React, { FC } from "react";

const SubMemo: FC<any> = (props) => {
  const { handleClick } = props;
  // console.log('subMemo');
  return (
    <>
      <Button onClick={handleClick}>submemo</Button>
      SubMemo
    </>
  );
};

export default React.memo(SubMemo);
