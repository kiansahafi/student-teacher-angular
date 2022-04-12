module.exports = {
  purge: {
    enable: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
