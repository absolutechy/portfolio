import { Icon } from '@iconify/react'
import { useState } from 'react'
import { skillGroups } from '../../data/portfolio'
import { FadeIn } from '../ui/FadeIn'
import { SectionTitle } from '../ui/SectionTitle'

// Icon names from the Iconify `logos:` & `simple-icons:` sets
const SKILL_ICONS: Record<string, string> = {
  // Frontend
  'React':          'logos:react',
  'TypeScript':     'logos:typescript-icon',
  'Next.js':        'logos:nextjs-icon',
  'Vite':           'logos:vitejs',
  'Zustand':        'logos:zustand',
  'React Query':    'logos:react-query-icon',
  // Styling
  'Tailwind CSS':   'logos:tailwindcss-icon',
  'CSS Modules':    'logos:css-3',
  'Framer Motion':  'logos:framer',
  'Radix UI':       'simple-icons:radixui',
  'shadcn/ui':      'simple-icons:shadcnui',
  // Tools & Platforms
  'Git':            'logos:git-icon',
  'GitHub Actions': 'logos:github-actions',
  'Vercel':         'logos:vercel-icon',
  'Figma':          'logos:figma',
  'Vitest':         'logos:vitest',
  'Playwright':     'logos:playwright',
  // Backend / Infra
  'Node.js':        'logos:nodejs-icon',
  'Express':        'logos:express',
  'PostgreSQL':     'logos:postgresql',
  'Supabase':       'logos:supabase-icon',
  'REST':           'logos:openapi-icon',
  'tRPC':           'logos:trpc',
}

// Subtle accent colour per category for the active tab indicator
const CATEGORY_ACCENT: Record<string, string> = {
  'Frontend':        'from-indigo-500 to-violet-500',
  'Styling':         'from-pink-500 to-rose-500',
  'Tools & Platforms': 'from-amber-500 to-orange-500',
  'Backend / Infra': 'from-emerald-500 to-teal-500',
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const activeGroup = skillGroups[activeTab]
  const accent = CATEGORY_ACCENT[activeGroup.category] ?? 'from-indigo-500 to-violet-500'

  return (
    <section id="skills" className="border-t border-gray-100 bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* ── Heading ─────────────────────────────────────────────────── */}
        <FadeIn>
          <SectionTitle
            eyebrow="Expertise"
            title="Skills & Technologies"
            subtitle="Technologies I work with daily to build production-grade web applications."
            className="mb-10"
          />
        </FadeIn>

        {/* ── Tab bar ─────────────────────────────────────────────────── */}
        <FadeIn delay={80}>
          <div className="mb-6 overflow-x-auto">
            <div className="flex min-w-max gap-2 rounded-2xl border border-gray-200 bg-white p-1.5 shadow-sm">
              {skillGroups.map((group, i) => {
                const isActive = i === activeTab
                const tabAccent = CATEGORY_ACCENT[group.category] ?? 'from-indigo-500 to-violet-500'
                return (
                  <button
                    key={group.category}
                    onClick={() => setActiveTab(i)}
                    className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1 ${
                      isActive
                        ? `bg-linear-to-r ${tabAccent} text-white shadow-md`
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                    }`}
                  >
                    {group.category}
                    <span
                      className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold tabular-nums ${
                        isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {group.skills.length}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </FadeIn>

        {/* ── Content panel ───────────────────────────────────────────── */}
        <FadeIn delay={120}>
          <div
            key={activeTab}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
            style={{ animation: 'skillsTabFade 0.2s ease' }}
          >
            {/* Panel header */}
            <div className="mb-6 flex items-end justify-between">
              <div>
                <div className={`mb-3 h-1 w-10 rounded-full bg-linear-to-r ${accent}`} />
                <h3 className="text-2xl font-black tracking-tight text-gray-900">
                  {activeGroup.category}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-gray-400">
                  {activeGroup.skills.length} technologies
                </p>
              </div>
            </div>

            {/* Icon tiles grid */}
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {activeGroup.skills.map((skill) => {
                const iconId = SKILL_ICONS[skill]
                return (
                  <div
                    key={skill}
                    className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 p-3 transition-all duration-200 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-sm"
                  >
                    {iconId ? (
                      <Icon icon={iconId} className="h-8 w-8" />
                    ) : (
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-100 text-xs font-bold text-indigo-600">
                        {skill.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                    <span className="w-full truncate text-center text-xs font-medium text-gray-600">
                      {skill}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </FadeIn>

      </div>

      {/* ── Tab-switch fade keyframe ─────────────────────────────────── */}
      <style>{`
        @keyframes skillsTabFade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
