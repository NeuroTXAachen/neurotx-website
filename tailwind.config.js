const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        krona: ["Krona"],
      },
      height: {
        '128': '40rem',
      },
      width:{
        '128': '40rem',
      },
      colors: {
        primary: "#EB0000",
        secondary: "#040142",
      },
      borderWidth: {
        16: "16px",
      },
      textUnderlineOffset: {
        "-2": "-2px",
      },
      padding: {
        32: "8rem", 
      }
    },
  },
  plugins: [],
};
