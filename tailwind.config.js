import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        'recommended-gradient': 'linear-gradient(135deg, #2E0854, #4B0082, #8A2BE2, #9400D3, #9932CC)',
        'default-gradient': 'linear-gradient(135deg, #18181B, #27272A, #3F3F46)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
