import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../../data/portfolio'
import { Badge } from '../ui/Badge'
import { FadeIn } from '../ui/FadeIn'
import { SectionTitle } from '../ui/SectionTitle'

export function Projects() {
  return (
    <section id="projects" className="border-t border-gray-100 bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn>
          <SectionTitle
            eyebrow="Work"
            title="Featured Projects"
            subtitle="A selection of projects I'm proud of — from side experiments to production applications."
            className="mb-12"
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                {/* Gradient thumbnail */}
                <div
                  className="relative h-44 w-full overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}18 0%, ${project.accent}38 100%)`,
                  }}
                >
                  {/* Radial glow */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 60%, ${project.accent}60 0%, transparent 55%)`,
                    }}
                  />
                  {/* Project monogram */}
                  <div
                    className="absolute bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm"
                    style={{ backgroundColor: project.accent }}
                  >
                    {project.title.slice(0, 2)}
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  {/* Links */}
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
      </div>
    </section>
  )
}
