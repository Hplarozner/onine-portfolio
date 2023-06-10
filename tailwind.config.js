/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
       backgroundImage: (theme) => ({
        dunes: "url('https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524_1280.jpg')",
      }),
    },
  },
  plugins: [],
}

