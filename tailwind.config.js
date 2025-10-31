/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Noto Serif JP'", "serif"],
        body: ["'Noto Sans JP'", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: '#2f3b2f', // 深い緑（アクセント）
          light: '#5a6a5a',
          pale: '#e9efe9',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#2a2a2a',
          mute: '#555555',
        },
        paper: {
          DEFAULT: '#fbfaf7', // 生成り背景
          edge: '#f0eee8',
        },
      },
      borderRadius: {
        xl: '0.5rem',
      },
    },
  },
  plugins: [],
}