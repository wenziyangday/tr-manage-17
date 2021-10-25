type RouteItemVO = {
  exact: boolean; // 精确匹配
  path: string; // 路径
  title: string; // 标题
  uniqueKey: string; // key
  component: LazyExoticComponent; // 组件
  showInNav: boolean; // 导航是否显示
  parent: string; // 父级标题
  redirect: string; // 要跳转的
  routes: RouteItemVO[]; // 下级路由
};

type RouteVO = Partial<RouteItemVO>;
export default RouteVO;
