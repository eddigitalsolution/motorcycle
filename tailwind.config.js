/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'speed-line': 'speedLine 0.8s linear infinite',
      },
      keyframes: {
        speedLine: {
          '0%': { transform: 'translateX(0%)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
