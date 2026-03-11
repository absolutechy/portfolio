import { ProjectsGrid } from '../components/sections/ProjectsGrid'
import { Process } from '../components/sections/Process'
import { Contact } from '../components/sections/Contact'
import { FadeIn } from '../components/ui/FadeIn'

export default function PortfolioPage() {
  return (
    <>
      {/* Page hero */}
      <section className="border-b border-gray-100 bg-gray-50 pb-12 pt-28 md:pt-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Portfolio
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              All Projects
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500">
              Every project I've shipped — from scrappy side experiments to production-scale
              applications used by thousands. Filter by type to find what you're looking for.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects grid with filter tabs */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <ProjectsGrid />
        </div>
      </section>

      {/* Process section */}
      <div className="border-t border-gray-100 bg-gray-50">
        <Process />
      </div>

      {/* Contact */}
      <Contact />
    </>
  )
}
