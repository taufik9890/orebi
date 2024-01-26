/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1600px'
      },
      fontFamily: {
        dm: ['DM Sans', 'sans-serif']
      },
      colors: {
        'primary': '#262626',
        'white': '#ffffff',
        'gray': '#D8D8D8',
        'secondary': '#6D6D6D',
        'secondaryGray': '#767676'
      },
      
    },
  },
  plugins: [],
}