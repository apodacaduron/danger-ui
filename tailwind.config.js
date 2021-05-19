module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#96d3ff',
          DEFAULT: '#41A2E8',
          dark: '#025fa3',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
