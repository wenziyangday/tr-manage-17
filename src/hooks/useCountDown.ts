/**
 * @description 自定义hooks--倒计时
 * */
import { useEffect, useState } from "react";

const useCountDown = (num: number) => {
  const [sec, setSec] = useState(num);

  useEffect(() => {
    setTimeout(() => {
      if (sec > 0) {
        setSec((_sec: number) => _sec - 1);
      }
    }, 1000);
  }, [sec]);

  return [sec, setSec];
};

export default useCountDown;
