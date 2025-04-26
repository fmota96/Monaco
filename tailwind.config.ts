import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'media',
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8B0000',
        secondary: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
export default config;