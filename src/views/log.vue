<template>
  <el-card style="min-height: 100%" class="card_body">
    <template #header>
      <div class="card-header clearfix">
        <span class="floatLeft" style="font-size: 16px; font-weight: bold">操作日志列表</span>
      </div>
    </template>
    <el-table></el-table>
  </el-card>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  onMounted(() => {
    console.log('page in page1');
  });
</script>
