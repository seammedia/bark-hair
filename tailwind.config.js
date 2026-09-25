/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['EB Garamond', 'Garamond', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        bark: ['Drupadi', 'serif'],
      },
      colors: {
        bark: {
          cream: '#F7F1FC',
          copper: '#421D06',
          espresso: '#421D06',
          purple: '#DDC5F1',
          lavender: '#DDC5F1',
          pink: '#F1E9FB',
          white: '#FEFEFE',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}
