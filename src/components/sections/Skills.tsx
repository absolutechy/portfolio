import { Icon } from '@iconify/react'
import { skillGroups } from '../../data/portfolio'
import { FadeIn } from '../ui/FadeIn'
import { SectionTitle } from '../ui/SectionTitle'

// Bento layout: col-span per card in lg grid-cols-3
const BENTO_SPANS = [
  'lg:col-span-2', // Frontend  — hero card
  'lg:col-span-1', // Styling
  'lg:col-span-1', // Tools
  'lg:col-span-2', // Backend   — hero card
]

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

export function Skills() {
  return (
    <section id="skills" className="border-t border-gray-100 bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* ── Heading ─────────────────────────────────────────────────── */}
        <FadeIn>
          <SectionTitle
            eyebrow="Expertise"
            title="Skills & Technologies"
            subtitle="Technologies I work with daily to build production-grade web applications."
            className="mb-12"
          />
        </FadeIn>

        {/* ── Bento grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const isHero = i === 0 || i === 3
            const iconCols = isHero
              ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6'
              : 'grid-cols-2 sm:grid-cols-3'

            return (
              <FadeIn key={group.category} delay={i * 80} className={BENTO_SPANS[i]}>
                <div className="group h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-indigo-100 hover:shadow-lg">

                  {/* Top accent bar */}
                  <div className="mb-6 h-1 w-12 rounded-full bg-indigo-600 transition-all duration-300 group-hover:w-20" />

                  {/* Category name */}
                  <h3
                    className={`mb-1 font-black tracking-tighter text-gray-900 ${
                      isHero ? 'text-5xl md:text-6xl' : 'text-4xl'
                    }`}
                  >
                    {group.category}
                  </h3>
                  <p className="mb-8 text-sm font-medium text-gray-400">
                    {group.skills.length} technologies
                  </p>

                  {/* Icon tiles grid */}
                  <div className={`grid gap-3 ${iconCols}`}>
                    {group.skills.map((skill) => {
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
            )
          })}
        </div>

      </div>
    </section>
  )
}
