const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        krona: ["Krona"],
      },
      colors: {
        primary: "#040142",
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
      },
    },
  },
  plugins: [],
};
