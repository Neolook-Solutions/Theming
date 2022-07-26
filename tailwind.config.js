/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          100: 'hsla(17, 100%, 99%, 1)',
          200: 'hsla(17, 100%, 95%, 1)',
          300: 'hsla(17, 100%, 83%, 1)',
          350: 'hsla(17, 97%, 75%, 1)',
          400: 'hsla(17, 88%, 61%, 1)',
          500: 'hsla(17, 98%, 43%, 1)',
          600: 'hsla(17, 100%, 34%, 1)',
        },
        'neutral': {
          100: 'hsla(17, 5%, 96%, 1)',
          200: 'hsla(17, 0%, 84%, 1)',
          300: 'hsla(17, 0%, 62%, 1)',
          400: 'hsla(17, 4%, 44%, 1)',
          500: 'hsla(17, 8%, 30%, 1)',
        },
        'error': {
          100: 'hsla(4, 100%, 94%, 1)',
          200: 'hsla(4, 93%, 67%, 1)',
          300: 'hsla(4, 94%, 80%, 1)',
          400: 'hsla(4, 95%, 34%, 1)',
        },
        'notif': {
          100: 'hsla(47, 96%, 93%, 1)',
          200: 'hsla(47, 96%, 58%, 1)',
          300: 'hsla(47, 81%, 54%, 1)',
          400: 'hsla(47, 85%, 38%, 1)',
        },
        'posit': {
          100: 'hsla(72, 76%, 88%, 1)',
          200: 'hsla(72, 98%, 43%, 1)',
          300: 'hsla(72, 76%, 40%, 1)',
          400: 'hsla(72, 81%, 25%, 1)',
        },
      },
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
      },
      fontSize: {
        'xs': ['12px', '14px'],
        'sm': ['14px', '22px'],
        'base': ['16px', '24px'],
        'lg': ['20px', '24px'],
        'xl': ['24px', '32px'],
        '2xl': ['40px', '48px'],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },


    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}


