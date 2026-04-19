<template>
<NuxtLayout> 
  <NuxtPage :page-key="(route) => route.fullPath"/>
</NuxtLayout>
</template>
<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));
</script>