/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Coolors palette: #111111, #a78bfa, #7c3aed, #9ca3af, #ffffff
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
          DEFAULT: '#a78bfa', // Light purple
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        accent: {
          DEFAULT: '#7c3aed', // Darker purple
          50: '#f3f0ff',
          100: '#e9e5ff',
          200: '#d6ceff',
          300: '#b8a6ff',
          400: '#9a7dff',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b0764',
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
