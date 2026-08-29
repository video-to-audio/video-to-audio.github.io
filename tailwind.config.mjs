/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#249D8F',
          'teal-dark': '#1b786d',
          'teal-light': '#2eb3a3',
          'teal-subtle': '#e6f5f3',
          ochre: '#E9C46A',
          'ochre-dark': '#c9a344',
          'ochre-light': '#f4d58d',
          coral: '#E76F51',
          'coral-dark': '#cb5437',
          'coral-light': '#ee8b72',
          cream: '#FDF0D5',
          'cream-dark': '#f9e2b1',
          'cream-light': '#fffdf9'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
};
