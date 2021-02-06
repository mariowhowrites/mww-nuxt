const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Agrandir', ...defaultTheme.fontFamily.sans],
        body: ['Telegraf', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
