import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#343C6A', // Primary color
        secondary: '#64748B', // Secondary gray tone
        accent: '#F59E0B', // Accent color (yellow/orange)
        background: '#F8FAFE', // Background light color
        dark: '#1E293B', // Dark text color
        menu: '#232323',
        menuGrey: '#B1B1B1',
        inputBg: '#F5F7FA',
        inputPlaceholderColor: '#8BA3CB',
        lightblue: '#718EBF',
      },
    },
  },
  plugins: [],
} satisfies Config
