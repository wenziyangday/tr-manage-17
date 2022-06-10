import "@pages/login/style/login.less";

import { logInfo } from "@utils/utils";
import { Button, Form, Input } from "antd";
import React, { FC } from "react";

const Login: FC = () => {
  return (
    <Form
      layout="vertical"
      onFinish={(values: any) => {
        logInfo(values);
      }}
    >
      <div className="login">
        <div className="i-wrap">
          <Form.Item className="Item" label="用户名：" name="userName">
            <Input />
          </Form.Item>
          <Form.Item className="Item" label="密   码：" name="password">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">登录</Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};
export default Login;
