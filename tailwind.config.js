/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Указываем папки, в которых используется Tailwind
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Добавляем Montserrat в шрифт по умолчанию
      },
    },
  },
  plugins: [],
}
