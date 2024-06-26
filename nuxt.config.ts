const baseURL = "https://api-goatamilan.cyclic.app";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Travel agency Goa to TamilNadu Goa Tamilan",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Travel agency Goa to TamilNadu Goa Tamilan",
        },
      ],
      script: [
        {
          src: "https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/title.png" },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
        },
      ],
    },
  },
  ssr: false,
  devtools: { enabled: false },
  css: [
    "~/assets/css/main.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  serverDir: "nuxt-server",
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },
  modules: ["@nuxt-alt/http", "@element-plus/nuxt", "@zadigetvoltaire/nuxt-gtm"],
  plugins: [
    '~/plugins/gtm.js',
  ],
  gtm: {
    id: 'GTM-W4Z68VB6'
  },
  http: {
    baseURL,
    credentials: "omit",
    browserBaseURL: baseURL,
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["iconify-icon"].includes(tag),
    },
  },
});
