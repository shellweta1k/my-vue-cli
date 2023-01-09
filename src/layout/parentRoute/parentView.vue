<template>
  <RouterView v-slot="{ Component, route }">
    <transition mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </RouterView>
</template>

<script lang="ts" setup></script>
