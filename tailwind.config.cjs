/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'mynerve': ['Mynerve', 'cursive'],
        'space': ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}