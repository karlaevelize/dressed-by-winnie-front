/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-yellow": "#F5CB5C",
        "pale-green": "#87BBA2",
      },
      fontFamily: {
        cursive: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
