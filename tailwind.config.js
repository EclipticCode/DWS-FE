/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js" ,
  ],
  theme: {
    extend: {
      colors : {
        background : "#f0f9ff" ,
        navbar : "#B4DDDE" , 
        textColor : "#0369a1" , 
        primary : "#075985" , 
        secondary : "#0284c7" , 
        tertiary : "#bae6fd" ,
        gray : "#1f2937" ,
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

