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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bg-primary': '#0a0a0f',
        'bg-panel': 'rgba(12, 12, 20, 0.8)',
        'text-primary': '#ccd6f6',
        'text-secondary': '#8892a4',
        accent: '#64ffda',
        'accent-dim': 'rgba(100, 255, 218, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
