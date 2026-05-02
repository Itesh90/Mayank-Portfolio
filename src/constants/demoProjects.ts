import { Project } from '@/types/project'

type DemoProject = Project & {
  gradient: string
  shape: 'wanderer' | 'relic' | 'shadow' | 'mystic' | 'echoes' | 'orb' | 'fire' | 'twin' | 'void' | 'box'
}

export const demoProjects: DemoProject[] = [
  {
    id: 'demo-1', slug: 'the-wanderer', title: 'The Wanderer',
    description: '', shortDescription: '',
    category: 'character', images: [], featured: true,
    order: 1, year: 2025, tools: [],
    createdAt: '', updatedAt: '',
    gradient: 'linear-gradient(135deg, #E8D5C4 0%, #C9B8A8 60%, rgba(184,150,90,0.13) 100%)',
    shape: 'wanderer',
  },
  {
    id: 'demo-2', slug: 'ancient-relic', title: 'Ancient Relic',
    description: '', shortDescription: '',
    category: 'props', images: [], featured: true,
    order: 2, year: 2025, tools: [],
    createdAt: '', updatedAt: '',
    gradient: 'linear-gradient(160deg, #D4E8D8 0%, #9FC4AA 100%)',
    shape: 'relic',
  },
  {
    id: 'demo-3', slug: 'shadow-walker', title: 'Shadow Walker',
    description: '', shortDescription: '',
    category: 'character', images: [], featured: true,
    order: 3, year: 2025, tools: [],
    createdAt: '', updatedAt: '',
    gradient: 'linear-gradient(120deg, #E0D4ED 0%, #BDA8CC 100%)',
    shape: 'shadow',
  },
  {
    id: 'demo-4', slug: 'mystic-form', title: 'Mystic Form',
    description: '', shortDescription: '',
    category: 'figures', images: [], featured: true,
    order: 4, year: 2024, tools: [],
    createdAt: '', updatedAt: '',
    gradient: 'linear-gradient(150deg, #FAE8D8 0%, #E0C0A0 100%)',
    shape: 'mystic',
  },
  {
    id: 'demo-5', slug: 'echoes-of-time', title: 'Echoes of Time',
    description: '', shortDescription: '',
    category: 'comics', images: [], featured: true,
    order: 5, year: 2024, tools: [],
    createdAt: '', updatedAt: '',
    gradient: 'linear-gradient(140deg, #D8E8F0 0%, #A8C4D8 100%)',
    shape: 'echoes',
  },
  {
    id: 'demo-6', slug: 'crystal-orb', title: 'Crystal Orb',
    description: '', shortDescription: '',
    category: 'props', images: [], featured: true,
    order: 6, year: 2024, tools: [],
    createdAt: '', updatedAt: '',
    gradient: 'linear-gradient(130deg, #F0E8D0 0%, #D4C090 100%)',
    shape: 'orb',
  },
  {
    id: 'demo-7', slug: 'fire-spirit', title: 'Fire Spirit',
    description: '', shortDescription: '',
    category: 'character', images: [], featured: true,
    order: 7, year: 2024, tools: [],
    createdAt: '', updatedAt: '',
    gradient: 'linear-gradient(160deg, #E8D0D0 0%, #C09090 100%)',
    shape: 'fire',
  },
  {
    id: 'demo-8', slug: 'twin-souls', title: 'Twin Souls',
    description: '', shortDescription: '',
    category: 'figures', images: [], featured: true,
    order: 8, year: 2023, tools: [],
    createdAt: '', updatedAt: '',
    gradient: 'linear-gradient(125deg, #D8EDE0 0%, #A8C8B8 100%)',
    shape: 'twin',
  },
  {
    id: 'demo-9', slug: 'into-the-void', title: 'Into the Void',
    description: '', shortDescription: '',
    category: 'comics', images: [], featured: true,
    order: 9, year: 2023, tools: [],
    createdAt: '', updatedAt: '',
    gradient: 'linear-gradient(140deg, #D0D8E8 0%, #90A8C0 100%)',
    shape: 'void',
  },
  {
    id: 'demo-10', slug: 'magic-box', title: 'Magic Box',
    description: '', shortDescription: '',
    category: 'props', images: [], featured: true,
    order: 10, year: 2023, tools: [],
    createdAt: '', updatedAt: '',
    gradient: 'linear-gradient(135deg, #E0D8E8 0%, #B0A0C0 100%)',
    shape: 'box',
  },
]

export type { DemoProject }
