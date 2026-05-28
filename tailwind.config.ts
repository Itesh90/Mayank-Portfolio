import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: 'rgb(var(--color-cream-rgb) / <alpha-value>)',
        ivory: 'rgb(var(--color-ivory-rgb) / <alpha-value>)',
        charcoal: 'rgb(var(--color-charcoal-rgb) / <alpha-value>)',
        warm: 'rgb(var(--color-warm-rgb) / <alpha-value>)',
        mid: 'rgb(var(--color-mid-rgb) / <alpha-value>)',
        dust: 'rgb(var(--color-dust-rgb) / <alpha-value>)',
        gold: {
          DEFAULT: 'rgb(var(--color-gold-rgb) / <alpha-value>)',
          light: 'rgb(var(--color-gold-light-rgb) / <alpha-value>)',
        },
        blush: 'rgb(var(--color-blush-rgb) / <alpha-value>)',
        sage: 'rgb(var(--color-sage-rgb) / <alpha-value>)',
      },
      fontFamily: {
        serif: 'var(--font-serif)',
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        hero: 'var(--text-hero)',
      },
      spacing: {
        'section': 'var(--space-section)',
        'container': 'var(--space-container)',
        'grid-gap': 'var(--space-grid-gap)',
        'card': 'var(--space-card)',
      },
      transitionTimingFunction: {
        smooth: 'var(--ease-smooth)',
        spring: 'var(--ease-spring)',
        out: 'var(--ease-out)',
      },
      transitionDuration: {
        fast: 'var(--duration-fast)',
        base: 'var(--duration-base)',
        slow: 'var(--duration-slow)',
        reveal: 'var(--duration-reveal)',
      },
    },
  },
  plugins: [],
};
export default config;
