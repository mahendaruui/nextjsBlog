module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "port-purple": "#5267DF",
        "port-red": "#FA5959",
        "port-blue": "#242A45",
        "port-grey": "#9194A2",
        "port-white": "f7f7f7"
      },
    },
    fontFamily: {
      'Poppins': ["Poppins, san-serif"]
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1124px",
        "2xl": "1124px",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
