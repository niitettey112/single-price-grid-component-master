/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif']
      },
      colors: {
        cyan:'#2ab2af',
        'dark-cyan': '#1e9491',
        'bright-yellow': '#c0df34',
        'light-gray': '#e5eff5',
        'grayish-blue': '#98a6bd'
      }
    },
  },
  plugins: [],
}
