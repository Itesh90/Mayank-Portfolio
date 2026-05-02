'use client';

import React, { useState, useCallback, useEffect } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface ToastData {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastProps {
  message: string;
  type?: ToastType;
  onClose: () => void;
}

const typeStyles: Record<ToastType, React.CSSProperties> = {
  success: {
    borderLeft: '3px solid var(--color-sage)',
  },
  error: {
    borderLeft: '3px solid #C0392B',
  },
  info: {
    borderLeft: '3px solid var(--color-gold)',
  },
};

const typeIconMap: Record<ToastType, string> = {
  success: '✓',
  error: '✕',
  info: 'i',
};

function ToastItem({ message, type = 'info', onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger enter animation
    const enter = requestAnimationFrame(() => setVisible(true));

    // Auto-dismiss after 4s
    const dismiss = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 4000);

    return () => {
      cancelAnimationFrame(enter);
      clearTimeout(dismiss);
    };
  }, [onClose]);

  return (
    <div
      role="alert"
      aria-live="assertive"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: 'var(--color-charcoal)',
        color: 'var(--color-cream)',
        padding: '14px 18px',
        minWidth: '260px',
        maxWidth: '360px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        lineHeight: 1.5,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transition: `opacity var(--duration-base) var(--ease-smooth), transform var(--duration-base) var(--ease-smooth)`,
        ...typeStyles[type],
      }}
    >
      {/* Icon */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          border: `1px solid ${type === 'success' ? 'var(--color-sage)' : type === 'error' ? '#C0392B' : 'var(--color-gold)'}`,
          fontSize: '10px',
          flexShrink: 0,
          color: type === 'success' ? 'var(--color-sage)' : type === 'error' ? '#C0392B' : 'var(--color-gold)',
        }}
      >
        {typeIconMap[type]}
      </span>
      {/* Message */}
      <span style={{ flex: 1 }}>{message}</span>
      {/* Close */}
      <button
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
        aria-label="Close notification"
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--color-dust)',
          cursor: 'pointer',
          fontSize: '14px',
          padding: '2px',
          flexShrink: 0,
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  );
}

// --- Toast Container ---

interface ToastContainerProps {
  toasts: ToastData[];
  onRemove: (id: number) => void;
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div
      aria-label="Notifications"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 9000,
        pointerEvents: 'none',
      }}
    >
      {toasts.map((t) => (
        <div key={t.id} style={{ pointerEvents: 'auto' }}>
          <ToastItem
            message={t.message}
            type={t.type}
            onClose={() => onRemove(t.id)}
          />
        </div>
      ))}
    </div>
  );
}

// --- useToast hook ---

let counter = 0;

export function useToast() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const show = useCallback(
    (message: string, type: ToastType = 'info') => {
      const id = ++counter;
      setToasts((prev) => [...prev, { id, message, type }]);
    },
    []
  );

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = {
    success: (message: string) => show(message, 'success'),
    error: (message: string) => show(message, 'error'),
    info: (message: string) => show(message, 'info'),
  };

  return { show, toast, toasts, remove };
}

// Default export: the container for convenience
export default ToastContainer;
