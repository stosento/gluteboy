/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'pattaya': ['Pattaya', 'sans-serif'],
      },
      spacing: {
        '128': '32rem', // 512px
        '144': '36rem', // 576px
        // Add more values as needed
      },
      backgroundImage: {
        'peaches': "url('/peaches.png')"
      },
    },
  },
  plugins: [
  ],
}

