module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F1592A",
          secondary: "#28a745",
          accent: "#CC2200",
          info: "#BC8500",
          neutral: "#ffffff",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
