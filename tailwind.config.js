const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'daddj': {
          50: '#f1ede9',
          100: '#e9e2dc',
          200: '#d9cdc4',
          300: '#c8b8ab',
          400: '#b8a393',
          500: '#a88e7a',
          600: '#917a68',
          700: '#7a6657',
          800: '#625245',
          900: '#4b3e34',
        }
      },
      fontFamily: {
        'sans': ['Oxanium', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
