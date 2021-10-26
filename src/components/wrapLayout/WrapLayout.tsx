import "@components/wrapLayout/style/wrap-layout.less";

import RenderSuspense from "@components/renderSuspense/RenderSuspense";
import RenderFooter from "@components/wrapLayout/components/RenderFooter";
import { Button, Layout } from "antd";
import React, { FC } from "react";
import { useHistory } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const WrapLayout: FC = () => {
  const history = useHistory();
  return (
    <Layout className="wrap-layout">
      <Button
        onClick={() => {
          history.push("/login");
        }}
      >
        登录
      </Button>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        首页
      </Button>
      <Button
        onClick={() => {
          history.push("/about");
        }}
      >
        关于我们
      </Button>
      <Button
        onClick={() => {
          history.push("/labs");
        }}
      >
        实验室
      </Button>
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
