module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
      height: ({ theme }) => ({
        auto: "auto",
        ...theme("spacing"),

        screenhalf: "50vh",
      }),
      fontFamily: {
        documentfont: ["Commissioner"],
      },
      maxWidth: ({ theme, breakpoints }) => ({
        mobile: "22rem",

        ...breakpoints(theme("screens")),
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
