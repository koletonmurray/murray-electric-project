/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGray': '#141414',
        'mediumGray': '#666666',
        'lightGray': '#D3D3D3',
        'black': '#041e2e',
        'yellow': '#eccf69',
        'lightYellow': '#fff8dd',
        'lightBlue': '#57b9d0',
        'darkBlue': '#25657a',
        'midBlue': '#3587a1'
      },
    },
  },
  plugins: [],
}

