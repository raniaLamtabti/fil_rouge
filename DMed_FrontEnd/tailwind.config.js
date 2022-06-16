/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#2979FF',
        blueBg: '#E7F0FF',
        background: '#F0F2F5',
        border: '#D9D9D9',
        dark: '#162642',
        gray: '#5A5A5A',
        light: '#fff',
        error: '#D93F21',
        success: '#1F9254',
        warning: '#CD6200',
      }
    },
  },
  plugins: [],
}
