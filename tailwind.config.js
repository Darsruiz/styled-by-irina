const Nth = require('tailwind-nth-child')
const nth3n = new Nth('odd', 'odd')
const nth2n = new Nth('even', 'even') // Sub-elements that are multiples of 2  === new  Nth('even','even')
const nth5 = new Nth('5', '-n+5') // The first five child elements
const nth4 = new Nth('4', '-n+4') // The first four child elements

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      'cinzel': '"Cinzel"',
      'abhaya': '"Abhaya Libre"',
      'assistant': '"Assistant"'
    },
    extend: {
      height: {
        '128': '32rem',
      },
      borderWidth: [
        'nth-child-odd',
        'nth-child-even',
        'nth-child-4',
        'nth-child-5'
      ],
      colors: {
        'soft-amber': {
          '50': '#f8f5f4',
          '100': '#efe9e5',
          '200': '#d6c6bc',
          '300': '#c9b4a8',
          '400': '#b39284',
          '500': '#a37a6c',
          '600': '#966a60',
          '700': '#7d5751',
          '800': '#674945',
          '900': '#543d3a',
        },
        'ebb': {
          '50': '#f9f7f7',
          '100': '#f1eeee',
          '200': '#e7e1e1',
          '300': '#d5cccc',
          '400': '#bbaeae',
          '500': '#a29191',
          '600': '#8a7878',
          '700': '#736262',
          '800': '#615353',
          '900': '#534949',
        },
        'fuscous-gray': {
          '50': '#f7f7f6',
          '100': '#e4e4e3',
          '200': '#c9c9c6',
          '300': '#a7a6a1',
          '400': '#84847d',
          '500': '#696963',
          '600': '#53534e',
          '700': '#444440',
          '800': '#393936',
          '900': '#32312f',
        },

      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    nth2n.nthChild(),
    nth3n.nthChild(),
    nth4.nthChild(),
    nth5.nthChild()
  ],
};
