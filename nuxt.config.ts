// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxt/image", //i
    "@vueuse/nuxt", //i
    "@nuxtjs/tailwindcss",//-D
    "nuxt-icon",//-D
    "@nuxtjs/google-fonts",//-D
    "@pinia/nuxt",//i
    "@nuxtjs/seo",//-D
  ],
})
