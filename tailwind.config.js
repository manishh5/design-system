
// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D4ED8',
          light: '#3B82F6',
          dark: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#FBBF24',
          light: '#FCD34D',
          dark: '#B45309',
        },
        tertiary: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#047857',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        semantic: {
          success: '#22C55E',
          info: '#3B82F6',
          warning: '#FBBF24',
          error: '#EF4444',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        background: {
          light: '#F9FAFB',
          dark: '#111827',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};