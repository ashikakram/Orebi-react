/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        headerContainer:"1100px",
      },
      width:{
        iconW:"20%",
        menuW:"70%",
      },
      colors:{
        menuItemColor:"#767676",
      },
      backgroundImage:{
        intro: "url('C:/Users/ashik/Desktop/orebi/src/assets/components/images_all/Intro.png')",
      },
      height:{
        intro:"550px",
      }
    },
  },
  plugins: [],
}

