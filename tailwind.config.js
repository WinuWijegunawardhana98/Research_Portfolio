/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sky-light': '#f0f9ff',  
        'ocean-blue': '#0066cc', 
        'white': '#FFFFFF',      
      },
    },
  },
  plugins: [],
}