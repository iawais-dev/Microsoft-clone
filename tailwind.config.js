/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    screens: {

      's':'401px',
      'ssm': '540px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
     
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'mlg':'1085px',
      'xl': '1280px',
      'xxl': '1360px',
      'xlg':'1400px',


      '2xl': '1536px',
      '2xxl': '1720px',
      '3xl': '1773px'
      // => @media (min-width: 1536px) { ... }
    }
    
  },extend: {},
  plugins: [],
}

