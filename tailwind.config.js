module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        maintext: ['#686B71'],
        bigtext: ['#191D26'],
        smalltitle: ['#808DAC'],
        bg1: ['#F5F7FA'],
        bg2: ['#565594'],

      },
      fontFamily: {
        navbar: ['Open Sans, sans-serif'],
        judul: ['Raleway, sans-serif'],
        main: ['Roboto, sans-serif'],

      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      maxWidth: {
        'full': '1920px',
      },
      
      height: {
        'bigsection': '48rem',
        'aboutsection' : '36rem',
      },

    },
  },
  variants: {
    scrollbar: ['rounded'],
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
