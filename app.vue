<template>
  <div>
    <NuxtLoadingIndicator />
    <Loadder v-if="!pageLoaded" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const pageLoaded = ref(false);
useNuxtApp().hook('page:start', () => {
  pageLoaded.value = false
})
useNuxtApp().hook('page:finish', () => {
  pageLoaded.value = true
})
</script>