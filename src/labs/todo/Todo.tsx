import "@labs/todo/style/todo.less";

import TodoCoreHook from "@labs/todo/components/TodoCoreHook";
import TodoHook from "@labs/todo/components/TodoHook";
import { Card, Divider } from "antd";
import React, { FC } from "react";

const Todo: FC = () => {
  return (
    <Card className="todo-list" title="每周TODO">
      <h3>每周安排自己做些小玩意</h3>

      {/** react hooks的源码认识 */}
      <TodoCoreHook />
      <Divider />

      {/** react hooks的基本认识和使用 */}
      <TodoHook />
      <Divider />
    </Card>
  );
};

export default Todo;
