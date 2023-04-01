

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {},
    colors:{
      colorRed: '#D72A33',
      colorWhite: '#FFFFFF',
      colorYellow: '#FFD353'
    },
    screens:{
      xs:'480px',
      xm:'580px',
      ss: '620px',
      s2:'747px',
      sm: '768px',
      sms: '880px',
      md: "1060px",
      lg: '1200px',
      lg2: '1300px',
      xl: '1700px', 
    },
    fontFamily:{
      mulish:['Mulish','sans-serif'],
      inter:['Inter', 'sans-serif'],
      syncopate:['Syncopate', 'sans-serif'],

    }

  },

  
  plugins: [],
}


