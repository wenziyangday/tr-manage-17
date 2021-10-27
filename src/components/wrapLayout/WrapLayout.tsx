import "@components/wrapLayout/style/wrap-layout.less";

import RenderSuspense from "@components/renderSuspense/RenderSuspense";
import RenderBreadcrumbs from "@components/wrapLayout/components/RenderBreadcrumbs";
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
        <RenderBreadcrumbs />
        <div className="wl-c-wrap">
          <RenderSuspense />
        </div>
      </Content>
      <Footer>
        <RenderFooter />
      </Footer>
    </Layout>
  );
};
export default WrapLayout;
