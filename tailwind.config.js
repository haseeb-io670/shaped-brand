/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0F0F0F',       // Deep black
        'secondary': '#E50914',     // Netflix red
        'secondary-dark': '#B7161B', // Darker red
        'accent': '#FF3B30',        // Bright red for accents
        'accent-dark': '#CC2F26',   // Darker accent red
        'matte-black': '#1A1A1A',   // Slightly lighter black
        'dark-grey': '#2C2C2C',     // Dark grey
        'light-grey': '#6D6D6D',    // Lighter grey
        'silver': '#E2E2E2',        // Very light grey
        'white': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'display': ['Poppins', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'navbar': ['Poppins', 'sans-serif'], // Using Poppins everywhere
      },
    },
  },
  plugins: [],
}
