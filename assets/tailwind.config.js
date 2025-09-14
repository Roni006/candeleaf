/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        product: "0px 34px 74px rgba(123, 123, 123, 0.2)"
      },
      fontFamily: {
        popins: ["poppins", "sans-serif"]
      }
    },
     
  }, 
plugins: [],
}