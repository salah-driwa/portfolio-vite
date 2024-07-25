/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1680px', // Add the 2xl breakpoint and set it to 1680px
      },
      scrollbar: {
        hide: 'scrollbar-width-none'
      },
      colors: {
        p1: '#73ffd7',
        primary: '#00eeff',
        secondary: '#ffffff',
        lightbg: '#102130'
      },
    },
  },
  plugins: [],
}

