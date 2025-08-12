/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-red': '#AB1522',
        'brand-cream': '#EDECE9',
        'brand-gray': '#9F9C8D',
      },
      fontFamily: {
        'lancea': ['Lancea Premium', 'serif'],
        'acherus': ['Acherus Grotesque', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [],
}

