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
    },
    fontSize: {
      '12':'12px',
      '13':'13px',
      '16': '16px',
      '18': '18px',
      '48': '48px',
    },
    width: {
      '100': '100px',
    },
    extend: {
      colors: {
        'primary': '#237653',
        'primary-active': '#249263',
        'disable': '#EEEEEE',
      },
    },
  },
  plugins: [],
}
