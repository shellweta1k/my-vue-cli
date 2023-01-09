<template>
  <el-aside :class="unfold ? 'layout-aside-fold' : 'layout-aside-unfold'">
    <el-menu
      :default-active="currentRoute"
      :router="true"
      :unique-opened="true"
      :collapse="unfold"
      class="el-menu-vertical-demo"
    >
      <menuItem :routeList="routes" />
    </el-menu>
  </el-aside>
</template>

<script lang="ts" setup>
  import { routeStore } from '@/pinia/routeStore';
  import { globalEdit } from '@/pinia/global';
  import menuItem from './navMenu/menuItem.vue';
  import { storeToRefs } from 'pinia';
  const routerStore = routeStore();
  const globalStore = globalEdit();
  const { routes, currentRoute } = storeToRefs(routerStore);
  const { unfold } = storeToRefs(globalStore);
</script>
