/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#E8D0C2", //pink-100
          "primary-focus": '#EEDCD1', //pink-75
          "primary-content": '#F3E7E0', //pink-50

          "secondary": "#A47D41", //brown-100
          "secondary-focus": '#BB9D70', //brown-75
          "secondary-content": '#D1BEA0', //brown-50

          "base-content": '#495057',//grey-4
          "base-300": '#ACB5BD', //grey-3
          "base-200": '#DDE2E5', //brown-2
          "base-100": '#F5F5F5', //brown-1

          "error": '#EF40', //red
          "yellow": '#F2F720', //yellow
          "green": '#13C139', //green
        },
      },
    ],
  },
}
