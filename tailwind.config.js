module.exports = {
  content: ['./src/**/*.{js,jsx}', 'index.html'],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Plus Jakarta Sans", sans-serif',
        serif: 'Prata, serif',
        cormorant: '"Cormorant Unicase", serif',
      },
      colors: {
        booksaw: {
          50: '#FDFCFB',
          100: '#FBFAF8',
          200: '#F9F8F5',
          300: '#F7F6F2',
          400: '#F5F4EF',
          500: '#F3F2EC',
          600: '#D5D4CF',
          700: '#B6B6B1',
          800: '#989794',
          900: '#7A7976',
          DEFAULT: '#F3F2EC',
        },
      },
      content: {
        vector: `url(/src/assets/images/vector.svg)`,
      },
    },
  },
};
