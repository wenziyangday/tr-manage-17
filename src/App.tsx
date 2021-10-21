import React, { FC } from "react";
import "@/App.less";
import Fun from "@components/Fun";
import apis from "@/apis/apis";

const App: FC = () => {
  apis.getUserInfo({});
  return (
    <>
      <Fun />
      kkkkl
    </>
  );
};

export default App;
