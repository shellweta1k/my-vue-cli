<template>
  <template v-for="route in props.routeList">
    <el-sub-menu v-if="route.children && route.children.length !== 0" :index="route.path">
      <template #title>
        <iconSvg :name="<string>route.meta?.icon" />
        <span>{{ route.meta!.title }}</span>
      </template>
      <menuItem :routeList="route.children" />
    </el-sub-menu>
    <template v-else>
      <el-menu-item :index="route.path">
        <iconSvg :name="<string>route.meta?.icon" />
        <template #title>
          {{ route.meta!.title }}
        </template>
      </el-menu-item>
    </template>
  </template>
</template>

<script lang="ts" setup>
  import iconSvg from '@/components/iconSvg/index.vue';
  import { RouteRecordRaw } from 'vue-router';
  const props = defineProps({
    routeList: Array<RouteRecordRaw>,
  });
</script>
