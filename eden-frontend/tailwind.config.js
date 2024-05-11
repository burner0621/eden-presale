/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#134D2E",
        "white-green": "#DDF4E8",
        "dark-gray": "#424547",
        "black-gray": "#131719",
        "white-gray": "rgba(0, 0, 0, 0.03)"
      },
      backgroundImage: {
        "title-description": 'linear-gradient(90deg, #000 0%, #00785B 100%);'
      }
    },
    fontFamily: {
      'manrope': "Manrope",
      "grotesk": "HK Grotesk"
    }
  },
  plugins: [],
}

