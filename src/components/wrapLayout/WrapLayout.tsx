import "@components/wrapLayout/style/wrap-layout.less";

import RenderSuspense from "@components/renderSuspense/RenderSuspense";
import RenderBreadCrumbs from "@components/wrapLayout/components/RenderBreadCrumbs";
import RenderFooter from "@components/wrapLayout/components/RenderFooter";
import RenderLogo from "@components/wrapLayout/components/RenderLogo";
import RenderMenu from "@components/wrapLayout/components/RenderMenu";
import RenderTool from "@components/wrapLayout/components/RenderTool";
import { Layout } from "antd";
import React, { FC } from "react";

const { Header, Content, Footer } = Layout;

const WrapLayout: FC = () => {
  return (
    <Layout className="wrap-layout">
      <Header className="wl-header">
        <div className="wl-hb-logo">
          <RenderLogo />
        </div>
        <div className="wl-hb-menu">
          <RenderMenu />
        </div>
        <div className="wl-hb-tool">
          <RenderTool />
        </div>
      </Header>
      <Content className="wl-content max-width">
        <RenderBreadCrumbs />
        <RenderSuspense />
      </Content>
      <Footer>
        <RenderFooter />
      </Footer>
    </Layout>
  );
};
export default WrapLayout;
