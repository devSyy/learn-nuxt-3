<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="About"/>
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

          <div class="q-gutter-y-sm q-mt-md">
            <div class="text-subtitle1 text-weight-bold">useState('counter')</div>
            <div>
              counter: {{ counter }}
              <q-btn
                label="counter"
                color="primary"
                dense
                no-caps
                @click="counter++"
              />
            </div>
            <div>
              sameCounter: {{ sameCounter }}
              <q-btn
                label="counter"
                color="primary"
                dense
                no-caps
                @click="sameCounter++"
              />
          </div>
          <div>
            <q-btn label="clear" @click="clearNuxtState()"></q-btn>
          </div>
          </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">

const counter = useState<number>('counter', () => 1);
const sameCounter = useState<number>('counter');

</script>