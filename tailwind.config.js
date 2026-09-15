/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#221F1D',
          soft: '#3A3532',
        },
        paper: {
          DEFAULT: '#F3ECDD',
          dark: '#EAE0C9',
          light: '#FAF6EC',
        },
        rust: {
          DEFAULT: '#A8481F',
          dark: '#823613',
          light: '#C25A2A',
        },
        wine: {
          DEFAULT: '#5C2331',
          dark: '#431924',
        },
        brass: {
          DEFAULT: '#B08D4F',
          light: '#D2B87F',
        },
        sage: {
          DEFAULT: '#5B6B4C',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      boxShadow: {
        soft: '0 12px 40px -18px rgba(34, 31, 29, 0.35)',
      },
    },
  },
  plugins: [],
}
