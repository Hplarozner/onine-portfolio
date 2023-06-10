// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app : {
/*     
    pageTransition : {
      name : "page"
    },

    layoutTransition : {
      name : "rotate",
    },
*/
    head : {
      title : "Ralph's Portfolio",
       link: [{ rel: "icon", type: "jpg", href: "/profile.jpg" }],
     
    }
  },
   css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
     postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
