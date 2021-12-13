import { AnyObjVO } from "@common/commonVO";
import { Button } from "antd";
import React, { FC } from "react";

import MyContext from "../context/context";

const ContextGrandSon: FC = () => {
  return (
    <div>
      <MyContext.Consumer>
        {(value: AnyObjVO) => {
          return (
            <div>
              <div>
                grandson name: {value.name}, grandson age: {value.age}
              </div>
              <Button
                onClick={() => {
                  value.callback();
                }}
              >
                多级进行更新
              </Button>
            </div>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
};

export default ContextGrandSon;
