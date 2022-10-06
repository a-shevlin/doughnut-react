/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayB': {
          500: '#4c596e',
          600: '#465469',
          700: '#3e4a5c',
        },
      },
    },
  },
  plugins: [],
}
