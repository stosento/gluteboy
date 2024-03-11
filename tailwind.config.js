/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'peaches': "url('./src/lib/assets/peaches.png')"
      },
    },
  },
  plugins: [],
}

