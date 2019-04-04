import Mock from "mockjs";

const first = [
  {
    label: "测试页面",
    path: "/test/index",
    component: "views/test",
    icon: "icon-caidan",
    meta: {},
    children: []
  },
  {
    label: "标签",
    path: "/tags",
    component: "views/util/tags",
    icon: "icon-caidan",
    meta: {
      i18n: "tags"
    },
    children: []
  },
  {
    label: "存储",
    path: "/store",
    component: "views/util/store",
    icon: "icon-caidan",
    meta: {
      i18n: "store"
    },
    children: []
  },
  {
    label: "全局函数",
    path: "https://avuex.avue.top/$/doc/api",
    icon: "icon-caidan",
    meta: {
      i18n: "api"
    },
    children: []
  },
  {
    label: "日志监控",
    path: "/logs",
    component: "views/util/logs",
    icon: "icon-caidan",
    meta: {
      i18n: "logs"
    },
    children: []
  },
  {
    label: "表格",
    path: "/table",
    component: "views/util/table",
    icon: "icon-caidan",
    meta: {
      i18n: "table"
    },
    children: []
  },
  {
    label: "表单",
    path: "/form",
    component: "views/util/form",
    icon: "icon-caidan",
    meta: {
      i18n: "form"
    },
    children: []
  },
  {
    label: "权限",
    path: "/permission",
    component: "views/util/permission",
    icon: "icon-caidan",
    meta: {
      i18n: "permission"
    },
    children: []
  },
  {
    label: "返回顶部",
    path: "/top",
    component: "views/util/top",
    icon: "icon-caidan",
    meta: {
      i18n: "top"
    },
    children: []
  },
  {
    label: "数据展示",
    path: "/data",
    component: "views/util/data",
    icon: "icon-caidan",
    meta: {
      i18n: "data"
    },
    children: []
  },
  {
    label: "异常页",
    path: "/error",
    meta: {
      i18n: "error"
    },
    icon: "icon-caidan",
    children: [
      {
        label: "403",
        path: "error",
        component: "components/error-page/403",
        icon: "icon-caidan",
        children: []
      },
      {
        label: "404",
        path: "404",
        component: "components/error-page/404",
        icon: "icon-caidan",
        children: []
      },
      {
        label: "500",
        path: "500",
        component: "components/error-page/500",
        icon: "icon-caidan",
        children: []
      }
    ]
  }
];
export default ({ mock }) => {
  if (!mock) return;
  let menu = [first];
  Mock.mock("/user/getMenu", "get", res => {
    let body = JSON.parse(res.body);
    return {
      data: menu[body.type] || []
    };
  });
};
