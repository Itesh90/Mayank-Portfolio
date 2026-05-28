import { Project } from '@/types/project'

type DemoProject = Project & {
  gradient?: string
  shape?: 'wanderer' | 'relic' | 'shadow' | 'mystic' | 'echoes' | 'orb' | 'fire' | 'twin' | 'void' | 'box'
}

const img = (
  id: string, url: string, alt: string,
  width = 1200, height = 1200
) => ({ id, url, publicId: id, width, height, alt })

const vid = (id: string, url: string) => ({
  id, url, publicId: id, duration: 0,
})

export const demoProjects: DemoProject[] = [
  // ── CHARACTER DESIGN ──────────────────────────────────────────
  {
    id: 'char-1', slug: 'dinosayz-mascot', title: 'DinoSayz Mascot',
    description: '', shortDescription: '', category: 'character',
    images: [img('char-1-img', '/assets/character/dinosayz-mascot.jpg', 'DinoSayz chibi dragon mascot character')],
    featured: true, order: 1, year: 2025, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'char-2', slug: 'story-animation', title: 'Story Animation',
    description: '', shortDescription: '', category: 'character',
    images: [img('char-2-img', '/assets/character/story-animation.jpg', 'Story animation — kid sewing a Spider-Man costume')],
    featured: true, order: 2, year: 2025, tools: ['Adobe Animate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'char-3', slug: 'pen-tablet-review', title: 'Cheapest Pen Tablet',
    description: '', shortDescription: '', category: 'thumbnail',
    images: [img('char-3-img', '/assets/thumbnail/pen-tablet-thumbnail.jpg', 'YouTube thumbnail — Cheapest Pen Tablet review', 3769, 2120)],
    featured: true, order: 8, year: 2025, tools: ['Adobe Premiere Pro'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'char-4', slug: 'tech-juggler', title: 'Tech Juggler',
    description: '', shortDescription: '', category: 'character',
    images: [img('char-4-img', '/assets/character/tech-juggler.png', 'Cartoon character juggling tech tools')],
    featured: true, order: 4, year: 2024, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'char-5', slug: 'character-sheet-green', title: 'Character Sheet',
    description: '', shortDescription: '', category: 'character',
    images: [img('char-5-img', '/assets/character/character-sheet-green.jpg', 'Green DinoSayz character design sheet — 4 poses', 2560, 1440)],
    featured: true, order: 5, year: 2025, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'char-6', slug: 'character-tuxedo-variants', title: 'Tuxedo Variants',
    description: '', shortDescription: '', category: 'character',
    images: [img('char-6-img', '/assets/character/character-tuxedo-variants.png', 'DinoSayz character in 4 tuxedo colour variants', 1373, 768)],
    featured: true, order: 6, year: 2025, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'char-7', slug: 'glasses-portrait', title: 'Glasses Portrait',
    description: '', shortDescription: '', category: 'character',
    images: [img('char-7-img', '/assets/character/glasses-portrait.jpg', 'Anime-style portrait of character with glasses')],
    featured: true, order: 7, year: 2025, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },

  // ── THUMBNAILS ────────────────────────────────────────────────
  {
    id: 'thumb-1', slug: 'studio-tablet', title: 'Studio 16 Pendisplay',
    description: '', shortDescription: '', category: 'thumbnail',
    images: [img('thumb-1-img', '/assets/thumbnail/studio-tablet.jpg', 'Animated character at computer desk with tablet software')],
    featured: true, order: 1, year: 2026, tools: ['Adobe Photoshop'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'thumb-2', slug: 'how-i-edit', title: 'How I Edit',
    description: '', shortDescription: '', category: 'thumbnail',
    images: [img('thumb-2-img', '/assets/thumbnail/how-i-edit.jpg', 'Meme-style thumbnail — How I Edit video')],
    featured: true, order: 2, year: 2026, tools: ['Adobe Photoshop'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'thumb-3', slug: 'how-i-dub', title: 'How I Dub My Animated Video',
    description: '', shortDescription: '', category: 'thumbnail',
    images: [img('thumb-3-img', '/assets/thumbnail/how-i-dub.jpg', 'Character at microphone — How I Dub My Animated Video')],
    featured: true, order: 3, year: 2026, tools: ['Adobe Photoshop'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'thumb-4', slug: 'diwali-dhamaka', title: 'Diwali Dhamaka',
    description: '', shortDescription: '', category: 'thumbnail',
    images: [img('thumb-4-img', '/assets/thumbnail/diwali.jpg', 'Festive Diwali Dhamaka thumbnail with character')],
    featured: true, order: 4, year: 2025, tools: ['Adobe Photoshop'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'thumb-5', slug: 'gaming-pc-build', title: 'Building a Gaming PC',
    description: '', shortDescription: '', category: 'thumbnail',
    images: [img('thumb-5-img', '/assets/thumbnail/gaming-pc.png', 'Building a Gaming PC thumbnail')],
    featured: true, order: 5, year: 2025, tools: ['Adobe Photoshop'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'thumb-6', slug: 'how-i-animate', title: 'How I Animate',
    description: '', shortDescription: '', category: 'thumbnail',
    images: [img('thumb-6-img', '/assets/thumbnail/how-i-animate.jpg', 'Character with animation palette — How I Animate')],
    featured: true, order: 6, year: 2025, tools: ['Adobe Photoshop'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'thumb-7', slug: 'bully-teacher', title: 'Bully Teacher',
    description: '', shortDescription: '', category: 'thumbnail',
    images: [img('thumb-7-img', '/assets/thumbnail/bully-teacher.jpg', 'Character labeled Bully Teacher with golden money')],
    featured: true, order: 7, year: 2024, tools: ['Adobe Photoshop'],
    createdAt: '', updatedAt: '',
  },

  // ── ARTWORK ───────────────────────────────────────────────────
  {
    id: 'art-1', slug: 'tech-juggler-art', title: 'Tech Juggler',
    description: '', shortDescription: '', category: 'artwork',
    images: [img('art-1-img', '/assets/artwork/tech-juggler-art.png', 'Cartoon character juggling tech items on blue background')],
    featured: true, order: 1, year: 2024, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'art-2', slug: 'yogurt-house', title: 'Yogurt House',
    description: '', shortDescription: '', category: 'artwork',
    images: [img('art-2-img', '/assets/artwork/yogurt-house.jpg', 'Whimsical probiotic yogurt jar house illustration')],
    featured: true, order: 2, year: 2024, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'art-3', slug: 'overgrown-car', title: 'Overgrown Car',
    description: '', shortDescription: '', category: 'artwork',
    images: [img('art-3-img', '/assets/artwork/overgrown-car.png', 'Abandoned car overgrown with plants and vines')],
    featured: true, order: 3, year: 2024, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'art-4', slug: 'lollipop-character', title: 'Lollipop Character',
    description: '', shortDescription: '', category: 'artwork',
    images: [img('art-4-img', '/assets/artwork/lollipop-char.png', 'Character in black shirt holding a lollipop')],
    featured: true, order: 4, year: 2024, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'art-5', slug: 'dino-bookshelf', title: 'Dino Bookshelf',
    description: '', shortDescription: '', category: 'artwork',
    images: [img('art-5-img', '/assets/artwork/dino-bookshelf.jpg', 'Character reading a Dino book in a cozy room')],
    featured: true, order: 5, year: 2024, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'art-6', slug: 'untitled-artwork', title: 'Untitled Artwork',
    description: '', shortDescription: '', category: 'artwork',
    images: [],
    videos: [vid('art-6-vid', '/assets/artwork/untitled-artwork.mp4')],
    featured: true, order: 6, year: 2025, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },

  // ── BACKGROUNDS ───────────────────────────────────────────────
  {
    id: 'bg-1', slug: 'forest-cabin', title: 'Forest Cabin',
    description: '', shortDescription: '', category: 'background',
    images: [img('bg-1-img', '/assets/background/forest-cabin.jpg', 'Illustrated forest cabin with orange lanterns')],
    featured: true, order: 1, year: 2024, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'bg-2', slug: 'night-window', title: 'Night Window',
    description: '', shortDescription: '', category: 'background',
    images: [img('bg-2-img', '/assets/background/night-window.jpg', 'Dark nighttime scene with warm glowing window')],
    featured: true, order: 2, year: 2024, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },

  // ── CLIENT WORK ───────────────────────────────────────────────
  {
    id: 'client-1', slug: 'client-business-char', title: 'Business Character',
    description: '', shortDescription: '', category: 'client',
    images: [img('client-1-img', '/assets/client/business-char.png', 'Cartoon character in suit with golden flames and money')],
    featured: true, order: 1, year: 2025, tools: ['ProCreate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'client-2', slug: 'client-video-1', title: 'Client Animation 1',
    description: '', shortDescription: '', category: 'client',
    images: [],
    videos: [vid('client-2-vid', '/assets/client/client-video-1.mp4')],
    featured: true, order: 2, year: 2025, tools: ['Adobe Animate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'client-3', slug: 'client-video-2', title: 'Client Animation 2',
    description: '', shortDescription: '', category: 'client',
    images: [],
    videos: [vid('client-3-vid', '/assets/client/client-video-2.mp4')],
    featured: true, order: 3, year: 2025, tools: ['Adobe Animate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'client-4', slug: 'client-video-3', title: 'Client Animation 3',
    description: '', shortDescription: '', category: 'client',
    images: [],
    videos: [vid('client-4-vid', '/assets/client/client-video-3.mp4')],
    featured: true, order: 4, year: 2025, tools: ['Adobe Animate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'client-5', slug: 'client-video-4', title: 'Client Animation 4',
    description: '', shortDescription: '', category: 'client',
    images: [],
    videos: [vid('client-5-vid', '/assets/client/client-video-4.mp4')],
    featured: true, order: 5, year: 2025, tools: ['Adobe Animate'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'client-6', slug: 'client-video-5', title: 'Client Animation 5',
    description: '', shortDescription: '', category: 'client',
    images: [],
    videos: [vid('client-6-vid', '/assets/client/client-video-5.mov')],
    featured: true, order: 6, year: 2025, tools: ['Adobe Animate'],
    createdAt: '', updatedAt: '',
  },

  // ── CREATIONS (personal work) ─────────────────────────────────
  {
    id: 'creation-1', slug: 'dream', title: 'Dream',
    description: '', shortDescription: '', category: 'creations',
    images: [],
    videos: [vid('creation-1-vid', '/assets/creations/dream-6.mp4')],
    featured: true, order: 1, year: 2025, tools: ['Adobe Premiere Pro'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'creation-2', slug: 'snapchat-reel', title: 'Snapchat Reel',
    description: '', shortDescription: '', category: 'creations',
    images: [],
    videos: [vid('creation-2-vid', '/assets/creations/snapchat-video.mp4')],
    featured: true, order: 2, year: 2025, tools: ['Adobe Premiere Pro'],
    createdAt: '', updatedAt: '',
  },
  {
    id: 'creation-3', slug: 'personal-video', title: 'Personal Work',
    description: '', shortDescription: '', category: 'creations',
    images: [],
    videos: [vid('creation-3-vid', '/assets/creations/personal-video.mov')],
    featured: true, order: 3, year: 2025, tools: ['Adobe Premiere Pro'],
    createdAt: '', updatedAt: '',
  },
]

export type { DemoProject }
