/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'shadow': 'box-shadow',
      },
    },
  },
  plugins:[
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

