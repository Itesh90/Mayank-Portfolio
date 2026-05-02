import React from 'react';

interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {/* Gold line */}
      <span
        style={{
          display: 'block',
          width: '32px',
          height: '1px',
          backgroundColor: 'var(--color-gold)',
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
      {/* Label text */}
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-xs)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-gold)',
          fontWeight: 500,
          lineHeight: 1,
        }}
      >
        {children}
      </span>
    </div>
  );
}
