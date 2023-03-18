/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./slices/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        overlayShow: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        overlayHide: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        },
        contentShow: {
          '0%': { opacity: 0, transform: 'translate(-50%, -45%)' },
          '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
        },
        contentHide: {
          '0%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
          '100%': {
            opacity: 0,
            transform: 'translate(-50%, -45%)'
          }
        }
      },
      animation: {
        overlayShow: 'overlayShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayHide: 'overlayHide 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentHide: 'contentHide 200ms cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
}
