<script setup lang="ts">
definePageMeta({
  name: "home",
})
useSeoMeta({
  title: "Douglas Silva - Portfólio",
  ogTitle: "Portfólio - Desenvolvedor Front-End Douglas Silva",
  description: "Portfólio do deselvolvedor front-end, atualmente trabalhando no Instituto Taqtile, Douglas S. Silva",
  ogDescription: "Portfólio do deselvolvedor front-end, atualmente trabalhando no Instituto Taqtile, Douglas S. Silva",
  ogLocale: "pt-br",
  ogType: "website",
  twitterCard: "summary",
  ogImage: {
    type: "image/png",
    url: "/assets/images/identity/og-image.png",
  },
  twitterImage: "/assets/images/identity/og-image.png",
  ogUrl: "https://devdouglasportfolio.netlify.app/",
  creator: "Douglas S. Silva",
})
</script>
<template>
  <main
    class="grid grid-cols-2 auto-rows-min gap-56 lg:grid-cols-4 *:col-span-2 *:lg:col-span-4 pb-20 w-full max-w-full overflow-hidden">
    <hero-section />
    <about-me />
    <skills-section />
    <projects-section />
    <certifications-section />
    <questions-section />
  </main>
</template>
