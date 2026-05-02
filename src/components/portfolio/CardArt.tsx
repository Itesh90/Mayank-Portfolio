import { DemoProject } from '@/constants/demoProjects'

const STROKE = 'rgba(255,255,255,0.35)'
const FILL = 'rgba(255,255,255,0.15)'

export function CardArt({ shape }: { shape: DemoProject['shape'] }) {
  switch (shape) {
    case 'wanderer':
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-[70%] h-[70%]">
          <circle cx="100" cy="80" r="50" stroke={STROKE} strokeWidth="1" />
          <path d="M60 160 Q100 120 140 160" stroke={STROKE} strokeWidth="1.5" fill="none" />
          <circle cx="80" cy="70" r="12" fill={FILL} />
          <circle cx="120" cy="70" r="12" fill={FILL} />
          <ellipse cx="100" cy="160" rx="40" ry="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      )
    case 'relic':
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-[60%] h-[60%]">
          <rect x="60" y="40" width="80" height="120" rx="4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="25" stroke={STROKE} strokeWidth="1" />
          <line x1="60" y1="80" x2="140" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        </svg>
      )
    case 'shadow':
      return (
        <svg viewBox="0 0 200 240" fill="none" className="w-[65%] h-[65%]">
          <ellipse cx="100" cy="70" rx="45" ry="55" stroke={STROKE} strokeWidth="1.5" />
          <path d="M55 125 L45 220 M145 125 L155 220 M55 125 Q100 170 145 125" stroke={STROKE} strokeWidth="1.5" fill="none" />
          <circle cx="85" cy="60" r="8" fill="rgba(255,255,255,0.2)" />
          <circle cx="115" cy="60" r="8" fill="rgba(255,255,255,0.2)" />
        </svg>
      )
    case 'mystic':
      return (
        <svg viewBox="0 0 180 180" fill="none" className="w-[70%] h-[70%]">
          <polygon points="90,20 160,80 130,160 50,160 20,80" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
          <circle cx="90" cy="90" r="30" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        </svg>
      )
    case 'echoes':
      return (
        <svg viewBox="0 0 240 200" fill="none" className="w-[80%] h-[80%]">
          <rect x="10" y="10" width="100" height="85" rx="3" stroke={STROKE} strokeWidth="1.5" />
          <rect x="120" y="10" width="110" height="85" rx="3" stroke={STROKE} strokeWidth="1.5" />
          <rect x="10" y="105" width="220" height="85" rx="3" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <circle cx="65" cy="55" r="18" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        </svg>
      )
    case 'orb':
      return (
        <svg viewBox="0 0 180 180" fill="none" className="w-[65%] h-[65%]">
          <path d="M90 20 L160 90 L90 160 L20 90 Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
          <circle cx="90" cy="90" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      )
    case 'fire':
      return (
        <svg viewBox="0 0 200 260" fill="none" className="w-[65%] h-[65%]">
          <circle cx="100" cy="70" r="48" stroke={STROKE} strokeWidth="1.5" />
          <path d="M52 140 Q100 180 148 140 L160 260 L40 260 Z" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
        </svg>
      )
    case 'twin':
      return (
        <svg viewBox="0 0 300 200" fill="none" className="w-[75%] h-[75%]">
          <ellipse cx="150" cy="100" rx="120" ry="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <circle cx="100" cy="80" r="30" stroke={STROKE} strokeWidth="1.5" />
          <circle cx="200" cy="80" r="30" stroke={STROKE} strokeWidth="1.5" />
          <path d="M70 140 Q150 180 230 140" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
        </svg>
      )
    case 'void':
      return (
        <svg viewBox="0 0 220 220" fill="none" className="w-[70%] h-[70%]">
          <path d="M110 20 L200 80 L170 180 L50 180 L20 80 Z" stroke={STROKE} strokeWidth="1.5" fill="none" />
          <circle cx="110" cy="110" r="35" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        </svg>
      )
    case 'box':
      return (
        <svg viewBox="0 0 180 180" fill="none" className="w-[65%] h-[65%]">
          <rect x="40" y="40" width="100" height="100" rx="8" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <rect x="60" y="60" width="60" height="60" rx="4" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <circle cx="90" cy="90" r="15" fill={FILL} />
        </svg>
      )
  }
}
