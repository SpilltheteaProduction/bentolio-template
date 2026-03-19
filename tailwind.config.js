/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data.json',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#788176',
        secondary: '#5E1803',
        overlay: 'rgba(255, 255, 255, 0.35)',

        text: '#F7F5F3',
        background: '#DECFB6',
      },

      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
