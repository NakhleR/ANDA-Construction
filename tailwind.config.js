/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ['"Fraunces"', 'sans-serif'],
        avenir: ['"Avenir"', 'sans-serif'],
      },
      colors: {
        accent: '#FEFAF0',
        accent2: '#403F2B',
      }
    },
  },
  plugins: [],
}

