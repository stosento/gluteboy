/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem', // 512px
        '144': '36rem', // 576px
        // Add more values as needed
      },
      backgroundImage: {
        'peaches': "url('./src/lib/assets/peaches.png')"
      },
    },
  },
  plugins: [],
}

