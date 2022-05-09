const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
	daisyui: {
    themes: ["light"],
  },
  plugins: [
		require('flowbite/plugin'),
		require("daisyui"),
	],
	daisyui: {
    styled: true,
    themes: false,
    base: false,
    utils: false,
    logs: true,
    rtl: false,
    prefix: "",
  },
	theme: {
    screens: {
			xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1050px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
			backgroundImage: {
        'hero-pattern': "url('/src/assets/hero.svg')",      }
    }
  }
}