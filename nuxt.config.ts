// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/styles/index.scss'
  ],

  styleResources: {
    scss: [
      "@/assets/styles/custom/_variables.scss",
      "@/assets/styles/custom/_mixins.scss",
    ],
  },

  devtools: true,

  plugins: [
    { src: '~/plugins/axios.ts' },
    { src: '~/plugins/i18n.ts', ssr: false },
    { src: '~/plugins/antd', ssr: false },
  ],

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ]


})

