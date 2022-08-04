/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    minHeight: {
      '780': '780px',
      '270': '270px',
    },
    fontSize: {
      '12':'12px',
      '13':'13px',
      '16': '16px',
      '18': '18px',
      '38': '38px',
      '40': '40px',
      '48': '48px',
      '50': '50px',
    },
    width: {
      '100': '100px',
    },
    extend: {
      colors: {
        'primary': '#237653',
        'primary-active': '#249263',
        'disable': '#EEEEEE',
        'title':'#1B1B1E',
        'bg-container':'#F5F5F5',
        'grey-text':'#696969'
      },
    },
  },
  plugins: [],
}
