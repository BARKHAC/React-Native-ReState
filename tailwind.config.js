/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ["Montserrat-Regular", "sans-serif"],
        montserratBold: ["Montserrat-Bold", "sans-serif"],
        montserratSemiBold: ["Montserrat-SemiBold", "sans-serif"],
        montserratExtraBold: ["Montserrat-ExtraBold", "sans-serif"],
      },
      colors: {
        background: "#1E1E1E",
        card: "#2C2929",
        menu: "#01021E",
        font: "#FFFFFF",
        "button-default": "#FDFCFC",
        "button-redeem": "#0B984D",
        "button-play": "#037237",
        // button: {
        //   default: "#FDFCFC",
        //   redeem: "#0B984D",
        //   play: "#037237",
        // },
        "explore-secondary": "#A455DC",
        "explore-highlight": "#FF9D00",
        "explore-text": "#FFFFFF",
        explore: {
          text: "#FFFFFF",
          highlight: "#FF9D00",
          secondary: "#A455DC",
        },
      },
    },
  },
  plugins: [],
}