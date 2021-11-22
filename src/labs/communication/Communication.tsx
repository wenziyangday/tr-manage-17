import { Consumer, Provider } from "@common/context";
import { useSetState } from "ahooks";
import { Button, Card, Divider } from "antd";
import React, { FC, useEffect, useImperativeHandle, useRef } from "react";

/**
 * @description 通信 多级子组件获取父、爷级组件的数据
 * */
const Communication: FC = () => {
  const childrenRef = useRef<any>(null);

  const [state, setCState] = useSetState<any>({});
  const { sonData = "", name } = state;

  const getContext = {
    count: 1000,
  };

  const doubleStep = () => {
    return new Promise((resolve) => {
      resolve(childrenRef.current.clickButton());
    });
  };

  return (
    <Card title="组件级别&&页面级别 通信">
      <h4>1.通信：子组件或者说多级子组件获取父级的数据和方法 createContext</h4>
      <Provider value={getContext}>
        <div>父组件</div>
        <Son />
      </Provider>
      <Divider />

      <h4>2.通信：子组件传输数据给父级组件</h4>
      <Button
        onClick={async () => {
          await doubleStep();
          const stateChild = childrenRef.current.getState();
          setCState({
            sonData: stateChild.name,
          });
        }}
      >
        获取父级调用更新方法后的子状态
      </Button>
      <Button
        onClick={() => {
          childrenRef.current.clickButton();
        }}
      >
        父级获取子的方法
      </Button>
      <div>父级数据来自子级数据：{sonData}</div>
      <ChildrenForward ref={childrenRef} />
      <Divider />

      <h4>3. 通过带参函数的方式获取子组件的状态值，从而实现父子状态同步</h4>
      <h5>父name：{name}</h5>
      <Child
        fun={(sonState: any) => {
          setCState({
            name: sonState.name,
          });
        }}
      />
    </Card>
  );
};

const Son: FC = () => {
  return (
    <div>
      <h4>son</h4>
      <Consumer>
        {(context: any) => {
          return <div>{context?.count}</div>;
        }}
      </Consumer>
    </div>
  );
};

const ChildrenForward: FC<any> = React.forwardRef((props, ref: any) => {
  const [state, setCFState] = useSetState<any>({});
  const { name = "这是一个初始的值default value" } = state;

  const clickButton = () => {
    setCFState({
      name: `${Math.random()}as`,
    });
  };

  useImperativeHandle(ref, () => {
    return {
      getState: () => {
        return state;
      },
      clickButton,
    };
  });

  return (
    <div>
      <div>
        name:{name} <Button onClick={clickButton}>点击</Button>
      </div>
    </div>
  );
});

const Child: FC<any> = (props) => {
  const { fun } = props;
  const [state, setCState] = useSetState<any>({});
  const { name } = state;

  useEffect(() => {
    fun(state);
  }, [state]);
  return (
    <div>
      子name：{name}
      <Button
        onClick={() => {
          setCState({
            name: `${Math.random()}张珊珊`,
          });
        }}
      >
        点击
      </Button>
    </div>
  );
};

export default Communication;
