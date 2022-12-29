/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: { "krona-one": "'Krona One'", chivo: "Chivo" } },
    colors: { indigo: "#040142", white: "#fff", red: "#eb0000" },
    fontSize: {
      xs: "20px",
      sm: "23px",
      base: "25px",
      lg: "30px",
      xl: "50px",
      "2xl": "130px",
    },
  },
  corePlugins: { preflight: false },
};
