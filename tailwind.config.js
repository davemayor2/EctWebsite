/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8fffd',
          100: '#d1fffb',
          200: '#a3fff7',
          300: '#75fff3',
          400: '#47ffef',
          500: '#1aa99c',
          600: '#15877c',
          700: '#10655c',
          800: '#0b433c',
          900: '#06211c',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#e9e9e9',
          200: '#d3d3d3',
          300: '#bdbdbd',
          400: '#a7a7a7',
          500: '#919191',
          600: '#737373',
          700: '#555555',
          800: '#373737',
          900: '#2a2a2c',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#3573ff',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

