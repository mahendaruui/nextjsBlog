module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "port-dark": "#7D7D7D",
        "port-purple": "#BEA9B2",
        "port-blue": "#4B64AE",
        "port-grey": "#f4d4c5",
        "port-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, san-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
