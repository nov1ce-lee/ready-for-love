/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tarot: {
          bg: '#0F0F12', // 炼金深黑
          card: '#1A1A1D', // 炭黑卡牌底色
          gold: '#C5A059', // 古董金
          goldDim: '#8A6D3B', // 暗金
          text: '#D4C5A0', // 羊皮纸色文字
          purple: '#4A3B52', // 褪色紫
          dark: '#050505', // 极深背景
          paper: '#E3D4B5', // 羊皮纸亮色（用于高光）
        }
      },
      fontFamily: {
        serif: ['"Cinzel Decorative"', 'serif'],
        body: ['"IM Fell English"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
        'card-pattern': "url('/bg-pattern.png')",
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
