/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#1B264F',
          300: '#C5D2DC',
          350: '#9BA9B4',
          400: '#6d8191',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#FFFFFF',
        },
        purple: {
          10: '#8B97C3',
          20: '#7181B6',
          40: '#4B5D91',
          50: '#404F7B',
          60: '#dec0f1',
          70: '#9992CC',
          80: '#5B69AC',
          90: '#274690',
          100: '#F4F4FF',
          110: '#A2C7FC',
          111: "#7592F6",
          112: "#5167F1",
          113: "#2937EC",
          114: "#CE88F4",
          115: "#9C5BCB",
          116: "#6D30A4",
          117: "#3B027B",
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#576CA8',
          700: '#274690',
          800: '#38379C',
          900: '#262668',
        },
        orange: {
          1: '#FDAF62',
          2: '#FA812F',
          3: '#F85D07',
        },
        teel: {
          1: "#4CC6A2",
          2: "#3CB094",
          3: "#2A9985",
          4: "#1C8579",
          5: "#0E726E",
          6: "#016063",
        }
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
