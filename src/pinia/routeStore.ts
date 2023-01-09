import { defineStore } from 'pinia';
import { RouteRecordRaw } from 'vue-router';

export const routeStore = defineStore('routeStore', {
  state() {
    return {
      routes: [] as Array<RouteRecordRaw>,
      currentRoute: '',
    };
  },
  actions: {
    getRoutes(routeList: Array<RouteRecordRaw>) {
      this.routes = routeList;
    },
    setCurrentRoute(route: string) {
      this.currentRoute = route;
    },
  },
});
