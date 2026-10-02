/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Soft studio-backdrop neutrals — clean, never stark
        paper: '#f4f4f2',
        ink: '#111111',
        stone: '#8a8a86',
        // Pulled from the flame embroidery on the Chomp Chomp cap
        flame: '#e2361f',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        // Didone serif for the wordmark and headings — fashion-house luxury
        serif: ['"Bodoni Moda"', 'Didot', '"Bodoni 72"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        label: '0.14em',
      },
    },
  },
  plugins: [],
}
