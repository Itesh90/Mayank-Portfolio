import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: 'var(--color-cream)',
        ivory: 'var(--color-ivory)',
        charcoal: 'var(--color-charcoal)',
        warm: 'var(--color-warm)',
        mid: 'var(--color-mid)',
        dust: 'var(--color-dust)',
        gold: {
          DEFAULT: 'var(--color-gold)',
          light: 'var(--color-gold-light)',
        },
        blush: 'var(--color-blush)',
        sage: 'var(--color-sage)',
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
