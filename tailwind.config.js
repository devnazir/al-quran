const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/pages/**/*.js', './src/components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'purple-dark': '#431AA1',
        'secondary': '#FAF8FC',
        'purple': '#9345F2',
        'orange': '#E6704A',
        'purple-light': '#B9A2D8'
      },
      backgroundImage: theme => ({
        'laptop': "url('/image/bg-md.svg')",
        'smartphone': "url('/image/bg-sm.svg')"
      }),
      screens: {
        'xs': { 'max': '640px' },
        '2xs': { 'max': '450px' },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.border-outset': {
          'border-style': 'outset'
        },
      }

      addUtilities(newUtilities)
    })
  ],
}