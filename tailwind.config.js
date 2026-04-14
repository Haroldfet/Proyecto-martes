/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
        secondary: '#00cc66',
        accent: '#ffaa00',
        foreground: '#1a1a1a',
        background: '#ffffff',
        muted: {
          foreground: '#666666',
          background: '#f5f5f5'
        },
        border: '#e0e0e0',
      },
    },
  },
  plugins: [],
}
