'use client';

import React, { useEffect, useRef, useState } from 'react';

const DOT_SIZE = 6;
const RING_SIZE = 32;
const RING_SIZE_HOVER = 52;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const hovered = useRef(false);
  const rafRef = useRef<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const LERP = 0.12;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]')
      ) {
        hovered.current = true;
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-hover]')
      ) {
        hovered.current = false;
      }
    };

    const tick = () => {
      // Dot follows cursor exactly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - DOT_SIZE / 2}px, ${pos.current.y - DOT_SIZE / 2}px)`;
      }

      // Ring lerps toward cursor
      ringPos.current.x += (pos.current.x - ringPos.current.x) * LERP;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * LERP;

      const currentRingSize = hovered.current ? RING_SIZE_HOVER : RING_SIZE;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - currentRingSize / 2}px, ${ringPos.current.y - currentRingSize / 2}px)`;
        ringRef.current.style.width = `${currentRingSize}px`;
        ringRef.current.style.height = `${currentRingSize}px`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${DOT_SIZE}px`,
          height: `${DOT_SIZE}px`,
          borderRadius: '50%',
          backgroundColor: 'var(--color-gold)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${RING_SIZE}px`,
          height: `${RING_SIZE}px`,
          borderRadius: '50%',
          border: '1px solid var(--color-gold)',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform, width, height',
          transition: `width var(--duration-base) var(--ease-smooth), height var(--duration-base) var(--ease-smooth)`,
        }}
      />
    </>
  );
}
