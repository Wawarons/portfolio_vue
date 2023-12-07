export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#E5B8F4',
        'color-accent': '#FDBA74'
      }
    },
    fontFamily: {
      'Cormorant-Garamond': ['Cormorant Garamond', 'sans-serif'],
      'Shippori-Mincho-B1': ['Shippori Mincho B1', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
