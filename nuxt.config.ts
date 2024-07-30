// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-16',
      title: 'Japan Travel Blog',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@vesp/nuxt-fontawesome'],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#bf2222b4',
            dark: 'rgba(29,29,29,1)',
            light: '#fdfdfd',
          },
        },
      },
    },
  },
});
