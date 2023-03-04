/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "0px",
      // => @media (min-width: 0px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1280px) { ... }
    },
    fontWeight: {
      "extra-light": 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      "extra-bold": 800,
      black: 900,
    },
    minHeight: {
      100: "100px",
      167: "167px",
      270: "270px",
      780: "780px",
    },
    maxHeight: {
      100: "100px",
      167: "167px",
      170: "170px",
      200: "200px",
      220: "220px",
      270: "270px",
      780: "780px",
    },
    maxWidth: {
      1400: "1400px",
      1000: "1000px",
      700: "700px",
      600: "600px",
      500: "500px",
      300: "300px",
      200: "200px",
    },
    mimWidth: {
      1400: "1400px",
      1000: "1000px",
      700: "700px",
      600: "600px",
      500: "500px",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      10: "10px",
      12: "12px",
      13: "13px",
      14: "14px",
      15: "15px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      28: "28px",
      30: "30px",
      38: "38px",
      40: "40px",
      48: "48px",
      50: "50px",
    },
    width: {
      100: "100px",
    },
    rotate: {
      270: "270deg",
      180: "180deg",
    },
    extend: {
      colors: {
        primary: "#237653",
        "primary-active": "#249263",
        "primary-green": "#00a884",
        "green-wa": "#63cb77",
        disable: "#EEEEEE",
        title: "#1B1B1E",
        "bg-container": "#F5F5F5",
        "bg-grey": "#D9D9D9",
        "grey-text": "#696969",
        "white-text": "#FFFFFF",
        "grey-border": "#D8D3D2",
        danger: "#d93026",
        icon: {
          bgGreen: "rgba(0, 123, 4, 0.07)",
          bgRed: "rgba(185, 28, 28, 0.07)",
          bgGrey: "rgba(20, 20, 20, 0.07)",
        },
      },
      transitionProperty: {
        height: "height",
        width: "width",
        spacing: "margin, padding",
      },
      opacity: {
        85: ".85",
        97: ".97",
      },
    },
  },
  plugins: [],
};
