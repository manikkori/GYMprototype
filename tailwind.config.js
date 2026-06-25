/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E63946',      // Aggressive Red for Gym vibe
        dark: '#050505',         // Pitch Black
        surface: '#121212',      // Slightly lighter cards
        surface2: '#1A1A1A',     // Hover states
        border: '#2A2A2A',       // Subtle borders
        muted: '#888888',        // Gray text
        light: '#FFFFFF',        // Pure white text
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}