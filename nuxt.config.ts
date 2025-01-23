// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/styles/index.scss"],
  devtools: { enabled: true },

  devServer: {
    port: 3032,
  },

  pages: true,

  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicons/icon.ico",
        },
      ],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/device",
    "nuxt-lazy-load",
    "@nuxt/image",
  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          padding: {
            // full: "100%",
          },
        },
      },
    },
  },
  lazyLoad: {
    directiveOnly: true,
  },

  // ssr: false, // Отключаем SSR для полной статики
  // nitro: {
  //   preset: "static", // Указываем, что хотим получить статику
  // },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_URL: process.env.API_URL,
      // BACK_URL: process.env.BACK_URL,
      // NOCAPTCHA_SITEKEY: process.env.NOCAPTCHA_SITEKEY,
    },
  },

  imports: {
    dirs: [
      "interfaces",
      "interfaces/models",
      "interfaces/utils",
      "router/routes",
    ],
  },
});
