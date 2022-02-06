const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js, jsx, ts, tsx}",
    "./components/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: colors.fuchsia,
      primary: "#d8caaa",
    },
    fontFamily: {
      body: ["Nanum Pen Script", "cursive"],
      sec: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
