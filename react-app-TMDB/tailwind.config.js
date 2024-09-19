/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "SchematicLogo": "url('../../public/schLogo.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

