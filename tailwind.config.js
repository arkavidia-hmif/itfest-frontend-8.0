/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
        varela: ['Varela Round', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: ['96px', '104px'],
        h2: ['72px', '72px'],
        h3: ['60px', '60px'],
        h4: ['48px', '48px'],
        h5: ['36px', '39px'],
        h6: ['24px', '26px'],
      },
    },
  },
  plugins: [],
};
