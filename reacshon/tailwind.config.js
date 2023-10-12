/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fb4dfb',
        'secondary': '#4d52e7'
      },
    },
  },
  plugins: [],
}
