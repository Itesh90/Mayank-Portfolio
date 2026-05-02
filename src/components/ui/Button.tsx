'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'ghost' | 'nav-cta';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-sm)',
    letterSpacing: '0.08em',
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--text-base)',
    letterSpacing: '0.06em',
  },
  lg: {
    padding: '16px 36px',
    fontSize: 'var(--text-lg)',
    letterSpacing: '0.04em',
  },
};

const variantBase: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: 'var(--color-charcoal)',
    color: 'var(--color-cream)',
    border: 'none',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: `background-color var(--duration-base) var(--ease-smooth), color var(--duration-base) var(--ease-smooth)`,
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-charcoal)',
    border: 'none',
    fontFamily: 'var(--font-sans)',
    fontWeight: 400,
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
    transition: `color var(--duration-base) var(--ease-smooth)`,
  },
  'nav-cta': {
    backgroundColor: 'transparent',
    color: 'var(--color-gold)',
    border: '1px solid var(--color-gold)',
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: `background-color var(--duration-base) var(--ease-smooth), color var(--duration-base) var(--ease-smooth)`,
  },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  type = 'button',
  className = '',
}: ButtonProps) {
  const [hovered, setHovered] = React.useState(false);

  const hoverStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: hovered
      ? { backgroundColor: 'var(--color-gold)', color: 'var(--color-cream)' }
      : {},
    ghost: hovered
      ? { textDecoration: 'underline', textUnderlineOffset: '4px', color: 'var(--color-gold)' }
      : {},
    'nav-cta': hovered
      ? { backgroundColor: 'var(--color-gold)', color: 'var(--color-charcoal)' }
      : {},
  };

  const disabledStyles: React.CSSProperties = disabled
    ? { opacity: 0.45, cursor: 'not-allowed', pointerEvents: 'none' }
    : {};

  const combinedStyle: React.CSSProperties = {
    ...variantBase[variant],
    ...sizeStyles[size],
    ...hoverStyles[variant],
    ...disabledStyles,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={combinedStyle}
    >
      {children}
    </button>
  );
}
