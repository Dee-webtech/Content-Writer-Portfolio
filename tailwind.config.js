export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nude: {
          50: '#FBF8F3',
          100: '#F5EFE7',
          200: '#EFE5DB',
          300: '#E8DBC8',
          400: '#DFD0B5',
          500: '#D4C3A0',
          600: '#C8B893',
          700: '#B8A077',
          800: '#9D8A66',
          900: '#7A6B52',
        },
        coral: {
          400: '#FF7F50',
          500: '#FF6B35',
          600: '#FF5722',
          700: '#E64514',
        },
        teal: {
          400: '#00BCD4',
          500: '#009688',
          600: '#00796B',
        },
      },
      animation: {
        'type-cursor': 'type-cursor 0.7s infinite',
      },
      keyframes: {
        'type-cursor': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};