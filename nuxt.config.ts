// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/rgb-124-2023/',
    buildAssetsDir: 'assets'
  },
  modules: ["@tresjs/nuxt"],
  devtools: { enabled: true }
})
