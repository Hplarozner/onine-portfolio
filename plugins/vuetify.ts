import { createVuetify } from 'vuetify'
import * as components from "vuetify/components";
import * as labs from "vuetify/labs/components";
import * as directives from "vuetify/directives";
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css' // Ensure this is imported
import  Vue3Lottie  from 'vue3-lottie'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
    },
    ssr: false,
    components: {
      ...components,
      ...labs,
    },
    
    theme: {
      defaultTheme: 'dark',

      themes: {
        light: {
          colors: {
            primary: "#FFFF"
          }
        },
        dark: {
          dark: false,
          colors: {
            primary: "#fff"
          }
        }
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
  nuxtApp.vueApp.use(Vue3Lottie)
})
