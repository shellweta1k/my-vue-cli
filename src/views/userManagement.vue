<template>
  <el-card style="min-height: 100%" class="card_body">
    <template #header>
      <div class="card-header clearfix">
        <span class="floatLeft" style="font-size: 16px; font-weight: bold">用户列表</span>
        <div class="floatRight">
          <el-button link>添加用户</el-button>
        </div>
      </div>
    </template>
    <el-table></el-table>
  </el-card>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue';
  onMounted(() => {
    console.log('page in page2');
  });
</script>
