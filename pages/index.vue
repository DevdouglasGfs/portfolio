<script setup lang="ts">
definePageMeta({
    name: "home",
});
useSeoMeta({
    title: "Douglas Silva - Portfólio",
    ogTitle: "Douglas Silva - Portfólio",
    description: "Portfólio do programador Douglas Silva",
    ogDescription: "Portfólio de Douglas Silva",
    ogLocale: "pt-br",
    ogType: "profile",
    twitterCard: "summary"
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
    <main class="grid grid-cols-2 auto-rows-min gap-56 lg:grid-cols-4 *:col-span-2 *:lg:col-span-4">
        <Hero />
        <WhoIAm />
        <Skills />
    </main>
</template>