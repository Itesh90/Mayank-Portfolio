'use client'

import { Category } from '@/types/project'

const categories: { value: Category | 'all'; label: string }[] = [
  { value: 'all',        label: 'All' },
  { value: 'character',  label: 'Character Design' },
  { value: 'thumbnail',  label: 'Thumbnail' },
  { value: 'artwork',    label: 'Artwork' },
  { value: 'background', label: 'Background' },
  { value: 'client',     label: 'Client Work' },
  { value: 'creations',  label: 'Creations' },
]

interface FilterBarProps {
  activeFilter: Category | 'all'
  onFilterChange: (filter: Category | 'all') => void
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-3 sm:gap-6" role="group" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onFilterChange(cat.value)}
          aria-pressed={activeFilter === cat.value}
          className={`group relative inline-flex items-center min-h-[44px] px-1 pb-1.5 text-[10px] sm:text-[11px] font-light tracking-[0.2em] uppercase transition-colors duration-300
            ${activeFilter === cat.value ? 'text-charcoal' : 'text-dust hover:text-charcoal'}`}
        >
          <span className="relative inline-block">
            {cat.label}
            <span
              aria-hidden="true"
              className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-base
                ${activeFilter === cat.value ? 'w-full' : 'w-0 group-hover:w-full'}`}
            />
          </span>
        </button>
      ))}
    </div>
  )
}
