/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#020617',
      },
      screens: {
        'xl': '1080px',
      },
    },
  },
  plugins: [],
}

