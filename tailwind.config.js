/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#4B0082',
        // rgb(75, 0, 130)
        customTeal: '#008080',
        // rgb(0, 128, 128)
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

