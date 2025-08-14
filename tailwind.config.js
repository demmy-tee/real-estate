/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Sansation', 'system-ui', 'sans-serif'],
      },
      colors: {
        soft: '#9CAFAA',
      },
    },
  },
  plugins: [],
}
