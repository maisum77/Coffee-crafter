import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CoffeeCraft Design System Colors from design brief
        'cc-void': '#0A0805',
        'cc-espresso': '#1C1410',
        'cc-roast': '#2E1F12',
        'cc-mahogany': '#6B3A2A',
        'cc-copper': '#C47830',
        'cc-gold': '#E8B84B',
        'cc-cream': '#F5EDDC',
        'cc-parchment': '#E8D9C0',
        'cc-fog': '#8A7A6A',
        
        // Additional semantic colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'],
        'sub-display': ['Cormorant SC', 'serif'],
        'body': ['Jost', 'sans-serif'],
        'mono': ['DM Mono', 'monospace'],
        'script': ['Pinyon Script', 'cursive'],
      },
      fontSize: {
        'hero': 'clamp(64px, 9vw, 140px)',
        'h2': 'clamp(42px, 6vw, 88px)',
        'h3': 'clamp(28px, 4vw, 36px)',
        'eyebrow': '11px',
        'body': '17px',
        'caption': '13px',
        'mono': '15px',
      },
      borderRadius: {
        'card': '4px',
        'button': '2px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'underline-slide': 'underlineSlide 0.3s ease forwards',
        'cursor-pulse': 'cursorPulse 0.3s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        underlineSlide: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        cursorPulse: {
          '0%': { transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        'fast': '250ms',
        'normal': '400ms',
        'slow': '700ms',
      },
      transitionTimingFunction: {
        'primary': 'cubic-bezier(0.76, 0, 0.24, 1)',
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(at center, #3D2010, #0A0805)',
        'gradient-card': 'linear-gradient(145deg, #1C1410, #0E0C09)',
        'copper-shimmer': 'linear-gradient(90deg, transparent, rgba(196,120,48,0.3), transparent)',
        'grain-texture': 'url("/grain.svg")',
      },
    },
  },
  plugins: [],
}
export default config