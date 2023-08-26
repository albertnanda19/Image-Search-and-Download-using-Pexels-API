/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4070F4',
        secondary: '#5f55f4',
        tertiary: '#2d6cab',
        quaternary: '#2dab7e',
        quinary: '#000000',
        senary: '#000000',
        septenary: '#000000',
        octonary: '#000000',
        nonary: '#000000',
        vignette: 'rgba(0, 0, 0, 0)',
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'custom': '0px 4px 5px -3px rgba(0,0,0,0.75)',
      },
      columns: {
        'custom': '5 340px'
      },
      backgroundImage : {
        skeleton: 'linear-gradient(to right, #d9d9d9 0%, rgba(0,0,0,0.05) 20%, #d9d9d9 40%, #d9d9d9 100%);'
      }
    },
  },
  plugins: [],
}

