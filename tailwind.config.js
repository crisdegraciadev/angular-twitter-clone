/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      blue: "#1d9bf0",
      white: "#ffffff",
      slate: colors.slate,
      gray: colors.gray,
    },
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {},
  },
  plugins: [],
};
