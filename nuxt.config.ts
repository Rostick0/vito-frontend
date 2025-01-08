// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
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

  imports: {
    dirs: [
      "interfaces",
      "interfaces/models",
      "interfaces/utils",
      "router/routes",
    ],
  },
});
