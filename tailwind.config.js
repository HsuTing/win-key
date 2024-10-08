/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
    extend: {
      colors: {
        pm: {
          dark: '#161A30',
          DEFAULT: '#31304D',
          light: '#B6BBC4',
          contrast: '#F0ECE5',
        },
        sc: {
          dark: '#1A374D',
          DEFAULT: '#406882',
          light: '#6998AB',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
