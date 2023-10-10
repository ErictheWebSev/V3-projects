/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'softViolet': 'hsl(273, 75%, 66%)',
        'softBlue': 'hsl(240, 73%, 65%)',
        'softRed': 'hsl(14, 88%, 65%)',
        'darkBlue': 'hsl(238, 29%, 16%)',
        'lightGray': 'hsl(240, 5%, 91%)',
      },
    },
  },
  plugins: [],
}
