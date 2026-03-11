import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../../data/portfolio'
import type { ProjectCategory } from '../../types'
import { Badge } from '../ui/Badge'
import { FadeIn } from '../ui/FadeIn'
import { cn } from '../../lib/utils'

const ALL = 'All'

const TABS: (typeof ALL | ProjectCategory)[] = [
  ALL,
  'App',
  'Library',
  'Tool',
  'UI',
]

export function ProjectsGrid() {
  const [active, setActive] = useState<typeof ALL | ProjectCategory>(ALL)

  const filtered = active === ALL ? projects : projects.filter((p) => p.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              active === tab
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
            )}
          >
            {tab}
            {tab !== ALL && (
              <span className="ml-1.5 text-xs opacity-70">
                ({projects.filter((p) => p.category === tab).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid — key change re-triggers FadeIn animations on filter change */}
      <div key={active} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <FadeIn key={project.id} delay={i * 60}>
            <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              {/* Gradient thumbnail */}
              <div
                className="relative h-44 w-full overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}18 0%, ${project.accent}38 100%)`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 60%, ${project.accent}60 0%, transparent 55%)`,
                  }}
                />
                {/* Category tag */}
                <span
                  className="absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{ backgroundColor: `${project.accent}22`, color: project.accent }}
                >
                  {project.category}
                </span>
                <div
                  className="absolute bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm"
                  style={{ backgroundColor: project.accent }}
                >
                  {project.title.slice(0, 2)}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-gray-500 transition-colors hover:text-gray-900"
                      aria-label={`${project.title} source code on GitHub`}
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 transition-colors hover:text-indigo-700"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-gray-400">No projects in this category yet.</p>
      )}
    </div>
  )
}
