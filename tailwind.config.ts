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
        // Primary Colors - Eco-friendly Palette
        'bamboo-brown': '#8D6E63',    // Navbar, Footer background, main dark accents
        'eco-green': '#4CAF50',       // Buttons, links hover, badges, highlights
        'beige': '#F5F5DC',           // Main page background, sections, cards, containers
        'dark-text': '#333333',       // Body text
        'bamboo-accent': '#A1887F',   // Secondary accents, hover borders, subtle highlights
        
        // Extended variants for better design flexibility
        bamboo: {
          brown: '#8D6E63',    // Primary bamboo brown
          accent: '#A1887F',   // Bamboo accent
          light: '#A1887F',    // Lighter bamboo variant
          dark: '#5D4037',     // Darker bamboo variant
        },
        eco: {
          green: '#4CAF50',    // Primary eco green
          light: '#81C784',    // Lighter eco green
          dark: '#388E3C',     // Darker eco green
        },
        
        // Legacy colors for backward compatibility
        charcoal: '#333333',   // Dark text
        golden: {
          bamboo: '#A1887F',   // Using bamboo accent for golden bamboo
          light: '#B8A082',    // Lighter golden variant
          dark: '#8D7A6B',     // Darker golden variant
        },
        
        // System colors
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-hover': 'scaleHover 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
