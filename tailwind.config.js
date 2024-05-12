/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      content: {
        link: 'url("")'
      },
      fontFamily: {
        sans: ['"Inter var", sans-serif'],
        Cormorant: ["Cormorant Garamond", "serif"],
        system: ["sans-serif", "system-ui"],
        abel: ["IBM Plex Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        jost: ["Jost", "sans-serif"]
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none"
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        }
      };
      addUtilities(newUtilities);
    }
  ]
};
