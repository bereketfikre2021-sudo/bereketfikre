/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coolors palette: #111111, #d9ff2e, #9ca3af, #ffffff, #4f7a00
        primary: {
          DEFAULT: '#111111', // Dark background
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#c0c0c0',
          400: '#808080',
          500: '#111111',
          600: '#0e0e0e',
          700: '#0b0b0b',
          800: '#080808',
          900: '#050505',
        },
        secondary: {
          DEFAULT: '#4f7a00', // Dark green
          50: '#f0f9e8',
          100: '#e1f3d1',
          200: '#c3e7a3',
          300: '#a5db75',
          400: '#87cf47',
          500: '#4f7a00',
          600: '#3f6200',
          700: '#2f4a00',
          800: '#1f3200',
          900: '#0f1a00',
        },
        accent: {
          DEFAULT: '#d9ff2e', // Bright lime green
          50: '#f9ffd6',
          100: '#f3ffad',
          200: '#edff84',
          300: '#e7ff5b',
          400: '#e1ff32',
          500: '#d9ff2e',
          600: '#aecc25',
          700: '#83991c',
          800: '#586613',
          900: '#2d330a',
        },
        neutral: {
          DEFAULT: '#9ca3af', // Gray
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        light: {
          DEFAULT: '#ffffff', // White
          50: '#ffffff',
          100: '#fefefe',
          200: '#fdfdfd',
          300: '#fcfcfc',
          400: '#fafafa',
          500: '#ffffff',
          600: '#f0f0f0',
          700: '#e0e0e0',
          800: '#d0d0d0',
          900: '#c0c0c0',
        }
      },
      fontFamily: {
        sans: ['Raleway', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
