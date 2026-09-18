/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDF8F0',
          100: '#FBF3E6',
          200: '#F5E7D2',
          300: '#EDD6B8',
        },
        clay: {
          300: '#F2A98F',
          400: '#E98A6B',
          500: '#E06F4F',
          600: '#C95A3C',
          700: '#A8472E',
        },
        teal: {
          300: '#6FC7BC',
          400: '#3FAF9F',
          500: '#2A9D8F',
          600: '#1F7F74',
          700: '#18635B',
        },
        sun: {
          300: '#F7C873',
          400: '#F4B24E',
          500: '#EF9F2E',
        },
        cocoa: {
          500: '#8A6F63',
          600: '#6E564C',
          700: '#4E3B33',
          800: '#3A2C26',
          900: '#2B211D',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        sans: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px -20px rgba(58, 44, 38, 0.25)',
        card: '0 10px 30px -12px rgba(58, 44, 38, 0.18)',
      },
      borderRadius: {
        blob: '60% 40% 55% 45% / 50% 60% 40% 50%',
      },
    },
  },
  plugins: [],
}