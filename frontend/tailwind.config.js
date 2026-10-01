//** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Small screens (e.g., mobile phones)
        'md': '768px',   // Medium screens (e.g., tablets)
        'lg': '1024px',  // Large screens (e.g., laptops)
        'xl': '1280px',  // Extra-large screens (e.g., desktops)
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans:  ['Inter', 'sans']
      },
      fontFamily: {
        'gentium-book-basic': ['Gentium Book Basic', 'serif'],
        'gochi-hand': ['Gochi Hand', 'cursive'],
      },
    },
  },
  plugins: [],
};