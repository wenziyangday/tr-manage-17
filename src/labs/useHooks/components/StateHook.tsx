import { logInfo } from "@utils/utils";
import { Button } from "antd";
import React, { FC, useState } from "react";

/**
 * @description useState 常规用法
 * */
type PersonVO = {
  name: string;
  age: number;
};

const StateHook: FC = () => {
  logInfo("StateHook-re-render");
  const [state, setState] = useState<Partial<PersonVO>>({
    name: "张三的歌",
    age: 1000,
  });

  const [state2, setState2] = useState<Partial<PersonVO>>({
    name: "李四的一天",
    age: 10,
  });

  const { name, age } = state;

  const { name: name2, age: age2 } = state2;

  return (
    <div>
      <h3>3.useState使用方法</h3>
      <dl>
        <dt>描述：</dt>
        <dd>A.返回一个state，以及更新state的函数(setState)</dd>
        <dd>
          B.setState 用于更新state，接收一个新的state值并将组件的
          <em>一次重新渲染</em>加入队列
        </dd>
        <dd>
          C.在后续的重新渲染中，useState 返回的第一个值将始终是更新后的
          最新的state(这个是一个全量数据替换){" "}
          <em>(说明state 是有存储属性的)</em>
        </dd>
        <dd>
          D.setState 更新是一个 <em>异步</em>的过程
        </dd>
        <dd>E.setState第二参数</dd>
      </dl>
      <dl>
        <dt>说明：</dt>
        <dd>
          A.React 会确保 setState 函数的 <em>标识是稳定的</em>，并且{" "}
          <em>不会</em>在组件重新渲染时发生变化， 这就是为什么可以安全地从
          useEffect 或 useCallback 的依赖列表中省略 setState。
        </dd>
        <dd>
          B. <b>（思考）</b>state 更新是在同一片内存地址上进行的数据更新
        </dd>
        <dd>
          C. <b>（思考）</b> ahooks 中useSetState和useState 之间的差异
        </dd>
      </dl>
      <dl>
        <dt>示例1：state中的值直接被新值替换</dt>
        <dd>
          <div>
            name: {name} age: {age}
          </div>
          <Button
            onClick={() => {
              setState({
                name: `${Math.random()}---`,
              });
            }}
          >
            更新name
          </Button>
          <Button
            onClick={() => {
              setState({
                age: Math.random() * 10000,
              });
            }}
          >
            更新age
          </Button>

          <Button
            onClick={() => {
              logInfo(age, "异步age");
            }}
          >
            更新age，函数传参
          </Button>
        </dd>
      </dl>
      <dl>
        <dt>示例2：多个state之间是相互独立的</dt>
        <dd>
          <div>
            name2: {name2} age2: {age2}
          </div>
          <Button
            onClick={() => {
              setState2({
                name: `${Math.random()}---`,
              });
            }}
          >
            更新name2
          </Button>
          <Button
            onClick={() => {
              setState2({
                age: Math.random() * 10,
              });
            }}
          >
            更新age2
          </Button>
        </dd>
      </dl>
    </div>
  );
};

export default StateHook;
