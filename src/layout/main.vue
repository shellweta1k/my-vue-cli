<template>
  <el-main>
    <el-scrollbar
      ref="layoutMainScrollbarRef"
      class="layout-main-scroll layout-backtop-header-fixed"
      wrap-class="layout-main-scroll"
      view-class="layout-main-scroll"
      style="height: 100%"
    >
      <parentView />
    </el-scrollbar>
  </el-main>
</template>

<script lang="ts" setup>
  import parentView from './parentRoute/parentView.vue';
  import { onMounted } from 'vue';
  onMounted(() => {
    console.log('page in layout main');
  });
</script>
