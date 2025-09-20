/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2d2d2d',
          darker: '#1c1c1c',
          accent: '#fe7000',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgb(0 0 0 / 0.25)',
      },
    },
  },
  plugins: [],
};
