import React, { FC, memo, useMemo, useState } from "react";

type IHeading = {
  title: string;
  style: any;
};
const Heading = memo((props: IHeading) => {
  return <h1 style={props.style}>{props.title}</h1>;
});

const CaptureValue: FC = () => {
  const [count, setCount] = useState(0);

  const clickCount = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 0);
  };

  const normalStyle = {
    backgroundColor: "teal",
    color: "red",
    title: `${Math.random()} normal`,
  };

  const memoizedStyle = useMemo(() => {
    return {
      backgroundColor: "red",
      color: "green",
      title: `${Math.random()} memoized`,
    };
  }, []);

  return (
    <div>
      count: {count}
      <div onClick={clickCount}>点击 查看memo效果/延迟的影响</div>
      <Heading style={normalStyle} title={normalStyle.title} />
      <Heading style={memoizedStyle} title={memoizedStyle.title} />
      <Heading style={{}} title={`${Math.random()} normal`} />
    </div>
  );
};
export default CaptureValue;
