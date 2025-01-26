/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens:{
        mob:"375px",
      },
      fontFamily:{
        "poopine":["poopine","sans-serif"],
        "poopineM":["poopineM","sans-serif"],
        "alice":["Alice","sans-serif"]
        
      },
    },
  },
  plugins: [],
}

