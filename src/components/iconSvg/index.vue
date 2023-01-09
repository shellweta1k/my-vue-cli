<template>
  <el-icon v-if="isEleIcon" :size="props.size" :color="props.color">
    <component :is="resIconName" />
  </el-icon>
</template>

<script lang="ts" setup name="iconSvg">
  import { computed } from 'vue';
  const props = defineProps({
    name: {
      type: String,
    },
    size: {
      type: Number,
      default: 14,
    },
    color: {
      type: String,
    },
  });

  //判断是否是Element-Plus自带的图标
  const isEleIcon = computed(() => {
    return props.name?.startsWith('ele-');
  });

  // 根据图标名称加载对应的svg组件
  const resIconName = computed(() => {
    return props.name;
  });
</script>
