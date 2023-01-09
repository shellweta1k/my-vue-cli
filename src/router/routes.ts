import { RouteRecordRaw } from 'vue-router';

export const dynamicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/log',
    children: [
      {
        path: '/log',
        name: 'log',
        component: () => import('@/views/log.vue'),
        meta: {
          title: '操作日志',
          icon: 'ele-House',
        },
      },
      {
        path: '/organizational',
        name: 'organizational',
        component: () => import('@/views/organizational.vue'),
        meta: {
          title: '机构管理',
          icon: 'ele-House',
        },
      },
      {
        path: '/userManagement',
        name: 'userManagement',
        component: () => import('@/views/userManagement.vue'),
        meta: {
          title: '用户管理',
          icon: 'ele-House',
        },
      },
      {
        path: '/permissions',
        name: 'permissions',
        component: () => import('@/views/permissions.vue'),
        meta: {
          title: '权限管理',
          icon: 'ele-House',
        },
      },
      {
        path: '/app-versions',
        name: 'app-versions',
        component: () => import('@/views/appVersions.vue'),
        meta: {
          title: 'app版本管理',
          icon: 'ele-House',
        },
      },
      {
        path: '/other-config',
        name: 'other-config',
        component: () => import('@/views/otherConfig.vue'),
        meta: {
          title: '其它配置',
          icon: 'ele-House',
        },
      },
    ],
  },
];

export const independentRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录',
    },
  },
];

export const unexpectRoutes: Array<RouteRecordRaw> = [
  {
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '请求错误',
      isHide: true,
    },
  },
];
