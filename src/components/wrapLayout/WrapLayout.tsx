import "@components/wrapLayout/style/wrap-layout.less";

import RenderSuspense from "@components/renderSuspense/RenderSuspense";
import RenderFooter from "@components/wrapLayout/components/RenderFooter";
import { Layout } from "antd";
import React, { FC } from "react";

const { Header, Content, Footer } = Layout;

const WrapLayout: FC = () => {
  return (
    <Layout className="wrap-layout">
      <Header />
      <Content>
        <RenderSuspense />
      </Content>
      <Footer>
        <RenderFooter />
      </Footer>
    </Layout>
  );
};
export default WrapLayout;
