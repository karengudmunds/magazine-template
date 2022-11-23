module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_*/*.{html,md}',
    './*.{html,md}'
  ],
  safelist: [
    {
      pattern: /(bg)-./,
    },
  ],
    theme: {
      fontFamily: {
       sans: [ 'Manrope', 'sans-serif' ],
    },
    extend: {
      aspectRatio: {
        'landscape': '4/3',
        'portrait': '3/4',
        'portrait-tall': '3/5',
      },
      spacing: {
        '5p': '5%',
        '10p': '10%',
      },
    },
  },
}


