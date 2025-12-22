/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out forwards',
        slideUpAndFade: 'slideUpAndFade 1.2s ease-out forwards',
        kenBurns: 'kenBurns 28s ease-in-out infinite', // Longer duration = more subtle
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUpAndFade: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenBurns: {
          '0%':   { transform: 'scale(1.05)'   }, // Start slightly zoomed
          '50%':  { transform: 'scale(1.15)'   }, // Slow zoom in
          '100%': { transform: 'scale(1.05)'   }, // Back to start
        },
      },
    },
  },
  plugins: [],
}