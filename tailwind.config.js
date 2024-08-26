/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'title':['Roboto-bold'],
      'sans':['Roboto'],
      'mono':['Roboto'],
      'serif':['Roboto']
    },
    extend: {
      colors:{
        'lapis':'#456990',
        'french':'#BCC4DB',
        'schroom':'#5C258D',
        'haze':'#4389A2'
      }
    },
  },
  plugins: [],
}