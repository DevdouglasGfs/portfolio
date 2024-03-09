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
    ogType: "website",
    twitterCard: "summary"
})
</script>
<template>
    <main class="grid grid-cols-2 auto-rows-min gap-56 lg:grid-cols-4 *:col-span-2 *:lg:col-span-4 pb-20">
        <Hero />
        <WhoIAm />
        <Skills />
        <Projects />
    </main>
</template>