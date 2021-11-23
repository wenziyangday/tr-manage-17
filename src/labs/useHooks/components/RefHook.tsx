import { logInfo } from "@utils/utils";
import { Button } from "antd";
import React, { FC, useRef, useState } from "react";

/**
 * @description useRef的常规用法
 * */
const RefHook: FC = () => {
  const pageRef = useRef<any>({});
  const [like, setLike] = useState(0);

  const handleAlertClick = () => {
    setTimeout(() => {
      logInfo(like);
    }, 2000);
  };

  return (
    <div>
      <h3>1.useRef的使用方法：</h3>
      <dl>
        <dt>描述：</dt>
        <dd>
          A.返回一个 <em>可变的</em>{" "}
          ref对象，其中该对象只有一个current属性，初始值为传入的参数
        </dd>
        <dd>
          B.返回的ref值在组件的整个生命周期内 <em>保持不变</em>
        </dd>
        <dd>
          C.当更新current的值时并不会re-render, 这是与useState
          <em>不同的地方</em>
        </dd>
        <dd>
          D.更新useRef是side effect(副作用)，通常写在{" "}
          <em>useEffect 或 event handler</em>里面
        </dd>
        <dd>E.useRef类似于类组件的this</dd>
      </dl>
      <dl className="eg">
        <dt>
          示例1：点击button选中文本框: 主要是通过ref 进行dom的基本事件操作
        </dt>
        <dd>
          <Button
            type="primary"
            ref={pageRef}
            onClick={() => {
              logInfo(pageRef.current, "dom对象");
            }}
          >
            点击
          </Button>
        </dd>
        <dt>示例2：跨渲染流程 读取状态值 (之后要注意发现是不是这样的)</dt>
        <dd>
          <Button onClick={() => setLike(like + 1)}>like:{like}</Button>
          <Button onClick={handleAlertClick}>读取like</Button>
        </dd>
        <dt>
          示例3：获取子组件的属性和方法 useImperativeHandle 配合forwardRef
          （用户可以指定状态和方法进行暴露）
          （注意的是：当属性是子组件的state值时会出现数据更新延迟）
        </dt>
      </dl>
      <dl className="diff">
        <dt>createRef 和 useRef的区别</dt>
        <dd>A.组件生命周期的第一阶段：两者没有任何区别</dd>
        <dd>
          B.组件生命周期的第二阶段：createRef每次都会返回个新的引用，而useRef不会随着组件的更新而重新创建
        </dd>
        <dd>C.组件生命周期的第三阶段：两者都会被销毁</dd>
      </dl>
      <dl className="desc">
        <dt>说明：</dt>
        <dd>A.forwardRef 和给函数子组件传入ref属性</dd>
        <dd>B.useImperativeHandle 是用来定义子组件暴露给父组件ref的方法</dd>
      </dl>
    </div>
  );
};

export default RefHook;
