/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000F33',
          50: '#E6E8F0',
          100: '#CCD1E1',
          200: '#99A3C3',
          300: '#6675A5',
          400: '#334787',
          500: '#000F33',
          600: '#000C29',
          700: '#00091F',
          800: '#000615',
          900: '#00030B',
        },
        secondary: {
          DEFAULT: '#F8F4EF',
          50: '#FEFCFA',
          100: '#FDF9F5',
          200: '#FBF3EB',
          300: '#F9EDE1',
          400: '#F8E7D7',
          500: '#F8F4EF',
          600: '#C6C3BF',
          700: '#94928F',
          800: '#62615F',
          900: '#30302F',
        }
      },
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
