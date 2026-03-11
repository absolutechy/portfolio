import { personal, stats } from '../../data/portfolio'
import { FadeIn } from '../ui/FadeIn'
import { SectionTitle } from '../ui/SectionTitle'

export function About() {
  const initials = personal.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <section id="about" className="border-t border-gray-100 bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left column — avatar + stats + quick info */}
          <FadeIn direction="left">
            <div className="flex h-full flex-col justify-center">
              {/* Avatar */}
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-600">
                <span className="text-2xl font-bold text-white">{initials}</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold tracking-tight text-gray-900">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Quick facts card */}
              <div className="mt-8 space-y-2.5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Location: </span>
                  {personal.location}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Email: </span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-indigo-600 transition-colors hover:underline"
                  >
                    {personal.email}
                  </a>
                </p>
              </div>

              {/* Status badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-xs font-medium text-gray-600">Open to opportunities</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-xs font-medium text-gray-600">Remote / Hybrid</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right column — bio */}
          <FadeIn direction="right">
            <SectionTitle
              eyebrow="About Me"
              title="Turning ideas into fast, accessible interfaces"
              className="mb-6"
            />
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-600">{personal.bio}</p>
              <p className="text-base leading-relaxed text-gray-600">{personal.bio2}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
