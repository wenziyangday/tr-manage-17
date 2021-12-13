import { logInfo } from "@utils/utils";
import { Button } from "antd";
import React, { FC, useCallback, useReducer } from "react";

/**
 * @description useReducer的基本用法
 * */
type IRHState = {
  count: number;
  age: number;
};

type IActionVO = {
  type: "decrement" | "decrement2";
  names: string;
};

const reducer = (state: IRHState, action: IActionVO) => {
  logInfo(state, action);
  const { count, age } = state;

  switch (action.type) {
    case "decrement":
      return {
        count: count + 1,
        age,
      };
    default:
      throw new Error();
  }

  return state;
};

const ReducerHook: FC = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    age: 100,
  });
  logInfo("refresh-reducer");

  const handleClick = useCallback(
    () =>
      dispatch({
        type: "decrement",
        names: "张三的哥",
      }),
    []
  );

  return (
    <div>
      <h3>6.useReducer使用方法</h3>
      <dl>
        <dt>描述：</dt>
        <dd>
          A.useState的替代方案：它接收一个形如(state, action) =&gt;
          newState的reducer，并返回当前state <em>（全量state）</em>{" "}
          以及与其配套的dispatch方法
        </dd>
        <dd>B.某些场景下，useReducer会比useState更适用。</dd>
        <dd>B-1.state逻辑较复杂且包含多个子值</dd>
        <dd>B-2.下一个state依赖于之前的state</dd>
        <dd>
          B-3.useReducer 还能给那些会触发 <em>深更新</em>{" "}
          的组件做性能优化，原因：你可以向子组件传递dispatch而不是回调函数
        </dd>
      </dl>
      <dl>
        <dt>说明：</dt>
        <dd>A.React会确保dispatch函数的标识是稳定的</dd>
        <dd>B.并且不会在组件重新渲染时改变</dd>
        <dd>
          <b>
            这就是为什么可以安全地从useEffect或者useCallback的依赖列表中省略dispatch
          </b>
        </dd>
        <dd>C. 如果在渲染</dd>
      </dl>
      <dl>
        <dt>
          示例1：基本使用 <Button onClick={handleClick}>点击更新</Button>
        </dt>
        <dd>
          count: {state.count}, age: {state.age}
        </dd>
      </dl>

      <dl>
        <dt>指定初始state：初始化的两种方式</dt>
        <dd>A. initP useReducer(reducer, initP)</dd>
        <dd>B. useReducer(reducer, )</dd>
        <dt>惰性初始化：将初始化函数作为 useReducer(reducer, initP, init)</dt>
        <dt>跳过dispatch：</dt>
        <dd>
          A.如果Reducer
          Hook的返回值与当前的state相同，React将跳过子组件的渲染及副作用的执行（React
          使用 Object.is 比较算法 来比较 state）
        </dd>
      </dl>

      <dl>
        <dt>参考链接：</dt>
        <dd>
          https://zh-hans.reactjs.org/docs/hooks-reference.html#usereducer
        </dd>
      </dl>
    </div>
  );
};

export default ReducerHook;
