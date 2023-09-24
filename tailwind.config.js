/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'banner-bg-img': "url('/src/assets/images/fc1f79e18cdc1a12320b9b10ec3e253d.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

