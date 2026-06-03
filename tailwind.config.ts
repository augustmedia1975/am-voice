import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#F5C800',
        black: '#0D0D0D',
        cream: '#F9F4E8',
        'warm-gray': '#C8BFA8',
        deep: '#1A1611',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        editorial: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
