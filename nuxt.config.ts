// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      typescript: { strict: true },
    },
  },
  googleFonts: {
    families: {
      'Krona One': true,
      'Julius Sans One': true,
      Manjari: true,
    },
  },
  image: {
    format: ['avif', 'webp', 'png', 'jpg'],
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  ogImage: { enabled: false },
  schemaOrg: { enabled: false },
})
