/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        background : "#f0f9ff" ,
        navbar : "#e0f2fe" , 
        textColor : "#0369a1" , 
        primary : "#075985" , 
        secondary : "#0284c7" , 
        tertiary : "#bae6fd" ,
        gray : "#64748b" ,
      }
    },
  },
  plugins: [],
}

