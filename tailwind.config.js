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
        accent3: '#F3F1C4'
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

