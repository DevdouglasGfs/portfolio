// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxt/image", //i
    "@vueuse/nuxt", //i
    "@nuxtjs/tailwindcss",//-D
    "nuxt-icon",//-D
    "@nuxtjs/google-fonts",//-D
    "@nuxtjs/seo",//-D
  ],
  googleFonts: {
    families: {
      "Krona One": true,
      "Julius Sans One": true,
      Manjari: true
    }
  },
  image: {
    format: ['avif', 'webp', 'png', 'jpg']
  },
  router: {
    options: {
      scrollBehaviorType: "smooth"
    }
  },
  ogImage: { enabled: false },
  schemaOrg: {enabled: false}
})
