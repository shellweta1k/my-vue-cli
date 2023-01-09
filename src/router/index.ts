import { createRouter, createWebHashHistory } from 'vue-router';
import { independentRoutes, dynamicRoutes, unexpectRoutes } from './routes';
import { RouteRecordRaw } from 'vue-router';
import pinia from '@/pinia';
import { storeToRefs } from 'pinia';
import { routeStore } from '@/pinia/routeStore';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...independentRoutes, ...unexpectRoutes],
});

const setRouteList = async (toRoute: string) => {
  // router.addRoute(...dynamicRoutes);

  // [dynamicRoutes[0], ...unexpectRoutes].forEach((route: RouteRecordRaw) => {

  // });
  dynamicRoutes[0].children!.push(...unexpectRoutes);
  router.addRoute(dynamicRoutes[0]);
  // router.addRoute(dynamicRoutes[0]);
  const routerStore = routeStore(pinia);
  routerStore.getRoutes(dynamicRoutes[0].children!.filter((route: RouteRecordRaw) => !route.meta!.isHide));
};

router.beforeEach(async (to, from, next) => {
  const routerStore = routeStore(pinia);
  routerStore.setCurrentRoute(to.fullPath);
  const { routes } = storeToRefs(routerStore);
  if (routes.value.length === 0) {
    await setRouteList(to.fullPath);
    next({ path: to.path, query: to.query, params: to.params });
  }
  document.title = to.meta.title as string;
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
