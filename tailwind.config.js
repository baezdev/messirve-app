/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#F6F6F6",
      blue: "#007AFF",
      black: "#000000",
      white: "#ffffff",
      gray: "#868686",
      gray2: "#CACACA",
      red: "#DF1010",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
