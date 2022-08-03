/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      '780': '780px',
    },
    fontSize: {
      '13':'13px',
    },
    width: {
      '100': '100px',
    },
    extend: {
      colors: {
        'primary': '#237653',
      },
    },
  },
  plugins: [],
}
