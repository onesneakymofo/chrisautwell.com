const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      current: 'currentColor',
      rose: colors.rose,
      gray: colors.coolGray,
      indigo: colors.coolGray,
      yellow: colors.yellow,
      amber: colors.amber,
      orange: colors.orange
    }
  },
  typography: {
    default: {
      code: {
        backgroundColor: "#222",
        color: "#DD1144",
        fontWeight: "400",  
        "border-radius": "0.25rem"
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
}
