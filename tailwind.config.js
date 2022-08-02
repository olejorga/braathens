module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '8rem',
        xl: '16rem',
        '2xl': '24rem'
      }
    }
  },
  plugins: []
}