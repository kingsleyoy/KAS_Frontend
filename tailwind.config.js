/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundColor: {
      projBlue: "#26577C",
      projMilk: "#EBE4D1",
      projGrey: "#B4B4B3",
      projOrange: "#E55604",
      projWhite: "#F1EFEF",
      projBlack: "#191717",
    },
    backgroundImage: {
      projGrad: "linear-gradient( 109.6deg,  #26577C 11.2%, #E55604 91.1% )",
      bm: "linear-gradient( 109.6deg,  #E55604 11.2%, #E55604 91.1% )",
      created: "linear-gradient( 109.6deg,  #000 11.2%, #333 91.1% )",
      attended: "linear-gradient( 109.6deg,  #26577C 11.2%, #E55604 91.1% )",
      // projForm: "linear-gradient( 110deg,  #26577C 20.2%, #E55604 80.1% )",
      projForm: "linear-gradient( 358.4deg,  #191717 -2.1%,  #26577C  90% );",
    },

    colors: {
      textWhite: "#F1EFEF",
      textOrange: "#E55604",
      textBlack: "#191717",
      textBlue: "#26577C",
      textGrey: "#B4B4B3",
      textMilk: "#EBE4D1",
      textGrad: "linear-gradient( 109.6deg,  #26577C 11.2%, #E55604 91.1% )",
    },

    extend: {},
  },
  plugins: [],
};
