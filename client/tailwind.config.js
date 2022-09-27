/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      xs: "280px",
      sm: "320px",
      md: "481px",
      lg: "769px",
      xl: "1025px",
      xxl: "1201px",
    },
    extend: {
      fontFamily: {
        poppins: ["poppins", 'sans-serif'],
        roboto: ["roboto", 'sans-serif'],
        hubballi: ["hubballi", 'sans-serif'],
        opensans: ['Open Sans', 'Sans Serif'],
        plex: ['IBM Plex Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

//font-family: 'IBM Plex Sans', sans-serif;