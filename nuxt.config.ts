import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'primeicons/primeicons.css',
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.css',
    'bootstrap-icons/font/bootstrap-icons.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@primevue/nuxt-module',
  ],
  googleFonts: {
    families: {
      Inter: true,
      Prompt: true,
    },
    display: 'swap',
  },
  primevue: {
    options: {
      theme: {
        preset: Aura
      },
      ripple: true,
    },
    autoImport: true,
  },
})
