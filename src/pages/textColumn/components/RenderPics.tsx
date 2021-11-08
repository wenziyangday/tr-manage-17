import "@pages/textColumn/style/render-pics.less";

import { IPicVO } from "@common/commonVO";
import React, { FC } from "react";

interface IRenderPicsVO {
  pics: IPicVO[];
}

/**
 * @description collapse 中一排缩略图
 * */
const RenderPics: FC<IRenderPicsVO> = ({ pics }) => {
  return (
    <div className="pics-column-manage">
      {pics?.map((pic) => (
        <img src={pic.url} key={pic.uid || Math.random()} alt="" />
      ))}
    </div>
  );
};

export default RenderPics;
