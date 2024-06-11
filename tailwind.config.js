module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        82: "20.5rem",
        112: "34rem",
        128: "32rem",
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    display: ["hover", "group-hover"],
    visibility: ["hover", "group-hover"],
    opacity: ["hover", "group-hover"],
    translate: ["hover", "group-hover"],
  },
  plugins: [],
};
