/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary : '#dc2626',
        secondary : '#B0B0B0',
        dark: '#F5F5F5',
        merahMarun: '#FFC107',
      },
      screens:{
        '2xl' : '1320px', 
      }
    }
  },
  plugins: [],
}

