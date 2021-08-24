module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        red: {
          DEFAULT: '#C0384E',
          light: '#E85069',
        },
        gray: {
          dark: '#333333',
          DEFAULT: '#C4C4C4',
          light: '#F2F2F2',
        },
        blue: {
          DEFAULT: '#3B9AD3',
          dark: '#5687B8',
        }
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked', 'hover'],
      borderRadius: ['hover'],
      fill: ['hover'],
      borderWidth: ['hover'],
      margin: ['hover'],
      padding: ['hover'],
    },
  },

  plugins: [],
}
