/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens : {
        'wide': '1180px'
      },
      fontFamily : {
        'asap' : ['Asap', 'sans-serif']
      },
      colors : {
        'primaryColor': '#0F0049',
        'secondaryColor': '#0A85EA',
        'accentColor': '#F63A61'
      }
    },
  },
  plugins: [],
};
