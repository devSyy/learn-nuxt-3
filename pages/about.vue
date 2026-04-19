<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <div class="text-h4">About</div>
      <p class="q-mt-sm text-grey-8">
        Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.
      </p>
      <div class="column">
        <RouterLink to="/">RouterLink Home</RouterLink>
        <RouterLink to="https://youtube.com/@gymcoding">RouterLink Home</RouterLink>
      </div>
      <br>
        <div class="column">
        <!-- <NuxtLink :prefetch="false" to="/">RouterLink Home</NuxtLink> -->
         <NuxtLink prefetched-class="bg-yellow" to="/">RouterLink Home</NuxtLink>
        <NuxtLink to="https://youtube.com/@gymcoding">RouterLink Home</NuxtLink>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>