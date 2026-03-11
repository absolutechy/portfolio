import type { Project, SkillGroup, Stat, Testimonial } from '../types'

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: 'Alex Morgan',
  role: 'Frontend Engineer',
  tagline: 'Building fast, accessible, and beautiful web experiences',
  bio: `I'm a frontend engineer with 5+ years of experience crafting high-performance
    web applications. I specialize in React and TypeScript, with a deep focus on user
    experience, accessibility, and performance optimization that ships without compromise.`,
  bio2: `When I'm not writing code, I contribute to open source, write about modern
    frontend patterns, and mentor junior developers. I believe clean, well-tested code
    is a gift to your future self — and to every teammate who reads it after you.`,
  location: 'San Francisco, CA',
  email: 'alex@example.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  cvUrl: '/resume.pdf',
  available: true,
}

// ─── About Stats ─────────────────────────────────────────────────────────────
export const stats: Stat[] = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Shipped', value: '40+' },
  { label: 'Open Source Stars', value: '2.4k' },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Vite', 'Zustand', 'React Query'],
  },
  {
    category: 'Styling',
    skills: ['Tailwind CSS', 'CSS Modules', 'Framer Motion', 'Radix UI', 'shadcn/ui'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub Actions', 'Vercel', 'Figma', 'Vitest', 'Playwright'],
  },
  {
    category: 'Backend / Infra',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'Supabase', 'REST', 'tRPC'],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'designsync',
    title: 'DesignSync',
    description:
      'A real-time design collaboration platform built with React and WebSockets. Supports live cursors, component versioning, and Figma-style comment threads.',
    tech: ['React', 'TypeScript', 'WebSockets', 'Tailwind', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accent: '#4F46E5',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description:
      'A Kanban-style project management app with drag-and-drop board editing, team workspaces, and a rich analytics dashboard for tracking sprint velocity.',
    tech: ['React', 'TypeScript', 'Zustand', 'React Query', 'Supabase'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accent: '#0891B2',
  },
  {
    id: 'radiant-ui',
    title: 'Radiant UI Kit',
    description:
      'An accessible React component library with 40+ components, built-in dark mode, full keyboard navigation, and comprehensive Storybook documentation.',
    tech: ['React', 'TypeScript', 'Radix UI', 'Tailwind', 'Storybook', 'Vitest'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    accent: '#059669',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Alex delivered a complex dashboard rewrite on time and under budget. The code quality was exceptional — clean, well-tested, and thoroughly documented. Our team velocity increased significantly after the handoff.',
    name: 'Sarah Chen',
    title: 'Engineering Manager',
    company: 'Acme Corp',
    initials: 'SC',
    accentClass: 'bg-violet-100 text-violet-700',
  },
  {
    id: '2',
    quote:
      'Working with Alex was a pleasure. They have a rare combination of strong design sensibility and deep technical expertise. The UI they built exceeded our expectations in both aesthetics and performance.',
    name: 'James Liu',
    title: 'Product Lead',
    company: 'Orbit Labs',
    initials: 'JL',
    accentClass: 'bg-sky-100 text-sky-700',
  },
  {
    id: '3',
    quote:
      'Alex refactored our legacy React codebase from class components to modern hooks and led our TypeScript adoption. Load times dropped 60% and our bug rate halved. I would hire them again in a heartbeat.',
    name: 'Maria Torres',
    title: 'CTO',
    company: 'Stackable',
    initials: 'MT',
    accentClass: 'bg-emerald-100 text-emerald-700',
  },
]
