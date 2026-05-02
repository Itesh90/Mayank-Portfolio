import React from 'react';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export default function LoadingSpinner({ size = 32, className = '' }: LoadingSpinnerProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Loading"
      role="status"
    >
      <span
        style={{
          display: 'block',
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          border: '2px solid var(--color-border-strong)',
          borderTopColor: 'var(--color-gold)',
          animation: 'spin 0.75s linear infinite',
          flexShrink: 0,
        }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
