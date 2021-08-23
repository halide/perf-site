const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      colors: {
        amber: colors.amber,
        orange: colors.orange,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        rose: colors.rose,
        teal: colors.teal,
      },
      screens: {
        xs: '420px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
