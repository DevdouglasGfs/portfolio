<script setup lang="ts">
definePageMeta({
    name: "home",
});
useSeoMeta({
    title: "Douglas Silva - Portfólio",
    ogTitle: "Portfólio - Desenvolvedor Front-End Douglas Silva",
    description: "Portfólio do programador Douglas S. Silva, desenvolvedor front-end com 3 anos de prática no desenvolvimento de sites e sistemas web",
    ogDescription: "Portfólio do programador Douglas S. Silva, desenvolvedor front-end com 3 anos de prática no desenvolvimento de sites e sistemas web",
    ogLocale: "pt-br",
    ogType: "website",
    twitterCard: "summary",
    ogImage: {
        type: "image/png",
        url: "/assets/images/identity/og-image.png"
    },
    twitterImage: "/assets/images/identity/og-image.png",
    ogUrl: "https://devdouglassilva.xyz",
    creator: "Douglas S. Silva",
})
</script>
<template>
    <main class="grid grid-cols-2 auto-rows-min gap-56 lg:grid-cols-4 *:col-span-2 *:lg:col-span-4 pb-20 w-full max-w-full overflow-hidden">
        <Hero />
        <WhoIAm />
        <Skills />
        <Projects />
        <Certifications />
        <MoreQuestions />
    </main>
</template>