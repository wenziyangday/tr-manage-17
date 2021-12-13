import { logInfo } from "@utils/utils";
import React, { FC, useEffect, useState } from "react";

/**
 * @description useEffect的基本用法
 * */
const EffectHook: FC = () => {
  const [state, setState] = useState<number>(0);
  logInfo(1);

  const handleSetState = () => {
    setState(Math.random);
  };

  useEffect(() => {
    logInfo(2);
    handleSetState();

    return () => {
      logInfo("unmount");
    };
  }, []);

  logInfo(3);

  return (
    <div>
      <h3>7.useEffect使用方法</h3>
      <dl>
        <dt>描述：</dt>
        <dd>A.接收一个包含命令式、且有可能有副作用代码的函数。</dd>
        <dd>
          B.使用useEffect是完成副作用操作的，赋值给useEffect的函数会在{" "}
          <em>组件渲染到屏幕之后执行</em>。
        </dd>
        <dd>
          C.默认情况下，effect将在每轮渲染结束后执行，但你可以选择让台在只有某些值改变的时候才执行
        </dd>
        {logInfo(4)}
      </dl>
      <dl>
        <dt>清除effect</dt>
        <dd>
          A.组件卸载时，需要清除 <em>effect创建</em>的：订阅或计时器ID等资源
        </dd>
        <dd>B.为防止内存泄漏，清除函数会在组件卸载前执行。</dd>
        <dd>
          C.如果组件多次渲染，则{" "}
          <b>在执行下一个effect之前，上一个effect就已被清除</b>
        </dd>
      </dl>
      <dl>
        <dt>effect的执行时机</dt>
        <dd>
          A.执行时机：useEffect中的函数会在浏览器完成布局和绘制之后，在一个{" "}
          <em>延迟事件中被调用</em>。
          这使得它适用于许多常见的副作用场景，比如：设置订阅和事件处理等情况
        </dd>
        <dd>
          B.并不是所有effect都可以被延迟执行。
          <div>
            eg: <b>useLayoutEffect调用时机：</b>
            一个对用户可见的DOM变更就必须在浏览器执行下一次绘制前被同步执行，这样用户才不会感觉到视觉上的不一致（概念类似于
            <p>被动监听事件和主动监听事件</p>的区别）
          </div>
        </dd>
      </dl>
      <dl>
        <dt>effect 的条件执行</dt>
        <dd>
          A.通常情况下，effect会在每轮组件渲染完成后执行，这样，一旦effect的依赖项发生变化，它就会被重新创建
        </dd>
        <dt>tips：</dt>
        <dd>
          如果你要使用此优化方式，请确保数组中包含了{" "}
          <em>所有外部作用域中会发生变化</em>且 <em>在 effect 中使用的变量</em>
          ，否则你的代码会引用到先前渲染中的旧变量。
        </dd>
      </dl>
      <dl>
        <dt>示例1. state: {state}</dt>
      </dl>

      <dl>
        <dt>说明：</dt>
        <dd>应用场景：清除订阅或者定时器id等等</dd>
        <dd>
          注意事项：在函数组件内（React
          渲染阶段）改变dom、添加订阅、设置定时器、记录日志、执行其他包含副作用的操作是
          <em>禁止的</em> ,这样可能会产生莫名其妙的bug并破坏UI的一致性
        </dd>
        <dd>执行顺序：useEffect执行是在dom渲染之后</dd>
      </dl>
    </div>
  );
};

export default EffectHook;
