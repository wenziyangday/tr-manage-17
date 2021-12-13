import { AnyObjVO } from "@common/commonVO";
import ContextGrandSon from "@labs/useHooks/components/ContextGrandSon";
import { Button } from "antd";
import React, { FC, useContext } from "react";

import MyContext from "../context/context";

const ContextSon: FC = () => {
  const useContextValue: AnyObjVO = useContext(MyContext);
  return (
    <div>
      <div>
        <h5>1.第一种写法：</h5>
        <MyContext.Consumer>
          {(value: AnyObjVO) => {
            return (
              <div>
                <div>
                  son name: {value.name}, son age: {value.age}
                </div>
                <Button
                  onClick={() => {
                    value.callback();
                  }}
                >
                  下属更新组件
                </Button>
              </div>
            );
          }}
        </MyContext.Consumer>
        <ContextGrandSon />
      </div>
      <div>
        <h5>2.第二种写法：</h5>
        <div>
          <div>
            son name: {useContextValue.name}, son age: {useContextValue.age}
          </div>
          <Button
            onClick={() => {
              useContextValue.callback();
            }}
          >
            下属更新组件
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContextSon;
