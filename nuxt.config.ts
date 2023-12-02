// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  image: {
    provider: "ipx",
  },
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/image",
  ],
  colorMode: {
    classSuffix: "",
  },
});
