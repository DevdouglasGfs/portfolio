<script setup lang="ts">
definePageMeta({
    name: "home",
})

const pageLoaded = ref(false);
useNuxtApp().hook('page:start', () => {
    pageLoaded.value = false
})
useNuxtApp().hook('page:finish', () => {
    pageLoaded.value = true
})
</script>
<template>
    <Loadder v-if="!pageLoaded" />
    <main class="grid grid-cols-2 auto-rows-fr gap-56 lg:grid-cols-4 *:col-span-2 *:lg:col-span-4">
        <Hero />
        <WhoIAm />
    </main>
</template>