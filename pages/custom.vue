<!--
<template>
  <div>
    <NuxtLayout name="custom">
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>
-->


<template>
  <NuxtLayout name="custom">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  layoutTransition: false,
})
</script>

<style scoped>

</style>