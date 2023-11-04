/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      boxShadow: {
        'box': '0px 10px 0px 0px rgba(0,0,0,1)'
      },
      colors: {
        'primary':'#FDF5DF',
        'secondary': '#5EBEC4',
        'tambahan': '#F92C85'
      }
    },
  },
  plugins: [],
}

