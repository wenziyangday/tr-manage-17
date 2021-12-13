import { logInfo } from "@utils/utils";
import React, { FC, useEffect, useLayoutEffect } from "react";

const LayoutEffectHook: FC = () => {
  logInfo("LayoutEffectHook-1");

  useEffect(() => {
    logInfo("LayoutEffectHook-2");
  }, []);

  useLayoutEffect(() => {
    logInfo("LayoutEffectHook-3");
  }, []);

  return (
    <div>
      <h3>8.useLayoutEffect使用方法</h3>
      <dl>
        <dt>描述：</dt>
        <dd>
          A.其函数签名和useEffect相同，但他会在所有的DOM变更之后同步调用effect。
        </dd>
        <dd>B.可以使用他来读取DOM布局并同步触发重渲染</dd>
        <dd>
          C.在浏览器执行绘制之前，useLayoutEffect内部的更新计划将同步被刷新
        </dd>
      </dl>
      <dl>
        <dt>说明：</dt>
        <dd>
          A.尽可能使用标准的useEffect以避免阻塞视觉更新（推荐一开始使用useEffect，只有当太出现问题时，再尝试使用useLayoutEffect）
        </dd>
      </dl>
      <dl>
        <dt>示例1：{logInfo("LayoutEffectHook-4")}</dt>
      </dl>
    </div>
  );
};

export default LayoutEffectHook;
