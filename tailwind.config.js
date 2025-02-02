/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '2xl': '1680px', // Add the 2xl breakpoint and set it to 1680px
      },
      scrollbar: {
        hide: 'scrollbar-width-none'
      },
      colors: {
        text: 'var(--text)',
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        'clash-display': ['"Clash Display"', 'sans-serif'],
        'small-display': ['"Satoshi"', 'sans-serif'],
      },
        'small-display': ['"Satoshi"', 'sans-serif'],
        keyframes: {
          shine: {
            '0%': { 'background-position': '100%' },
            '100%': { 'background-position': '-100%' },
          },
        },
        animation: {
          shine: 'shine 5s linear infinite',
        },
    },
  },
  plugins: [],
}

