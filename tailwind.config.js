/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'silver_lake_blue': {
          DEFAULT: '#6290c3',
          100: '#101c2a',
          200: '#203854',
          300: '#30557e',
          400: '#4071a9',
          500: '#6290c3',
          600: '#80a5cf',
          700: '#a0bbdb',
          800: '#bfd2e7',
          900: '#dfe8f3'
        },
        'mint_green': {
          DEFAULT: '#c2e7da',
          100: '#183d30',
          200: '#2f7a60',
          300: '#47b790',
          400: '#84cfb5',
          500: '#c2e7da',
          600: '#cdece1',
          700: '#daf0e8',
          800: '#e6f5f0',
          900: '#f3faf7'
        },
        'honeydew': {
          DEFAULT: '#f1ffe7',
          100: '#286100',
          200: '#51c200',
          300: '#7fff24',
          400: '#b8ff85',
          500: '#f1ffe7',
          600: '#f3ffeb',
          700: '#f6fff0',
          800: '#f9fff5',
          900: '#fcfffa'
        },
        'space_cadet': {
          DEFAULT: '#1a1b41',
          100: '#05050d',
          200: '#0a0b1a',
          300: '#101027',
          400: '#151635',
          500: '#1a1b41',
          600: '#32357d',
          700: '#4c4fb7',
          800: '#878acf',
          900: '#c3c4e7'
        },
        'lime': {
          DEFAULT: '#baff29',
          100: '#283b00',
          200: '#517600',
          300: '#79b100',
          400: '#a2ed00',
          500: '#baff29',
          600: '#c9ff54',
          700: '#d6ff7e',
          800: '#e4ffa9',
          900: '#f1ffd4'
        }
      }
    },
  },
  plugins: [],
}
