<template>
  <el-container>
    <aSide />
    <el-container class="main_container" direction="vertical">
      <Header />
      <Main />
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
  import aSide from './aside.vue';
  import Main from './main.vue';
  import Header from './header.vue';
  import { onMounted } from 'vue';
  onMounted(() => {
    console.log('page in layout');
  });
</script>
