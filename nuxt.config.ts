// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    storage: {
      fileSystem: {
        driver: "fsLite",
        base: "./public/letterFiles",
      }
    }
  },
})
