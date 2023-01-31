/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "built-sb": ["built-titling-sb", "sans-serif"],
      "built-rg": ["built-titling-rg", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
  important: true,
};
