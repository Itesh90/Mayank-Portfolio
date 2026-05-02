'use client'

import { Category } from '@/types/project'

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'character', label: 'Characters' },
  { value: 'props', label: 'Props' },
  { value: 'comics', label: 'Comics' },
  { value: 'figures', label: 'Figures' },
]

interface FilterBarProps {
  activeFilter: Category | 'all'
  onFilterChange: (filter: Category | 'all') => void
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex gap-6" role="group" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onFilterChange(cat.value)}
          aria-pressed={activeFilter === cat.value}
          className={`text-xs font-light tracking-widest uppercase transition-all duration-300
            ${
              activeFilter === cat.value
                ? 'text-charcoal border-b border-gold pb-0.5'
                : 'text-dust hover:text-charcoal'
            }
          `}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
