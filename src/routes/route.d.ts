type RouteItemVO = {
  /** 精确匹配 */
  exact: boolean;
  /** 路径 */
  path: string;
  /** 标题 */
  title: string;
  /** key */
  uniqueKey: string;
  /** 组件 */
  component: LazyExoticComponent;
  /** 导航是否显示 */
  showInNav: boolean;
  /** 父级标题 */
  parent: string;
  /** 要跳转的 */
  redirect: string;
  /** 下级路由 */
  routes: RouteVO[];
};

type RouteVO = Partial<RouteItemVO>;
export default RouteVO;
