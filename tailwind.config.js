/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'soft-green': '#A8DADC',
          'peach': '#FFCAD4',
          'warm-gray': '#2C3639',
          'light-orange': '#FFB4A2',
          'soft-blue': '#457B9D',
        },
      },
    },
    darkMode: 'class', 
  };
  