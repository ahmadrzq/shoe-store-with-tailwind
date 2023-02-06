/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary1: "#003e29",
        primary2: "#e4bba1",
        primary3: "#d9d9d9",
        borderColor: "#787878",
        bgColor: "#ededed",
        bgGreen: "#023423",
      }
    },
  },
  plugins: [],
};
