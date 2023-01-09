<template>
  <el-header>
    <div>
      <iconSvg :name="unfold ? 'ele-Expand' : 'ele-Fold'" :size="16" @click="globalStore.setFold()" />
    </div>
    <div>user</div>
  </el-header>
</template>

<script lang="ts" setup>
  import { globalEdit } from '@/pinia/global';
  import { storeToRefs } from 'pinia';
  import iconSvg from '@/components/iconSvg/index.vue';

  const globalStore = globalEdit();
  const { unfold } = storeToRefs(globalStore);
</script>

<style lang="scss" scoped></style>
