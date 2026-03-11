import { Code2, Compass, Pencil, RefreshCw, Rocket } from 'lucide-react'
import { processSteps } from '../../data/portfolio'
import { FadeIn } from '../ui/FadeIn'
import { SectionTitle } from '../ui/SectionTitle'

const STEP_ICONS = [Compass, Pencil, Code2, Rocket, RefreshCw]

// Zigzag coordinates in percentage units (viewBox 0 0 100 100)
const NODES = [
  { left: 10, top: 28 },
  { left: 30, top: 72 },
  { left: 50, top: 28 },
  { left: 70, top: 72 },
  { left: 90, top: 28 },
]

// Smooth cubic bezier S-curve through the 5 node positions
const SNAKE_PATH =
  'M 10,28 C 18,28 22,72 30,72 C 38,72 42,28 50,28 C 58,28 62,72 70,72 C 78,72 82,28 90,28'

export function Process() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn>
          <SectionTitle
            eyebrow="How I Work"
            title="My Process"
            subtitle="A repeatable, collaborative workflow I've refined across 40+ projects."
            align="center"
            className="mb-12"
          />
        </FadeIn>

        {/* ── Desktop: zigzag snake layout ─────────────────────────────── */}
        <div className="relative hidden h-105 overflow-visible md:block">
          {/* SVG dashed S-curve connector */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d={SNAKE_PATH}
              fill="none"
              stroke="#818cf8"
              strokeWidth="0.6"
              strokeDasharray="2.5 1.8"
              strokeLinecap="round"
            />
          </svg>

          {/* Circles + text blocks */}
          {processSteps.map((step, i) => {
            const { left, top } = NODES[i]
            const Icon = STEP_ICONS[i]
            const isTop = top < 50 // odd nodes sit high, even nodes sit low

            return (
              <div key={step.step}>
                {/* Icon circle — absolutely placed, FadeIn wraps the visual */}
                <div
                  className="absolute z-10"
                  style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <FadeIn delay={i * 100} direction="none">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 ring-4 ring-white shadow-lg shadow-indigo-200 transition-transform duration-300 hover:scale-110">
                      <Icon size={24} className="text-white" strokeWidth={1.75} />
                    </div>
                  </FadeIn>
                </div>

                {/* Text block — below circle for top nodes, above for bottom nodes */}
                <div
                  className="absolute w-36 text-center"
                  style={
                    isTop
                      ? {
                          left: `${left}%`,
                          top: `calc(${top}% + 44px)`,
                          transform: 'translateX(-50%)',
                        }
                      : {
                          left: `${left}%`,
                          top: `calc(${top}% - 44px)`,
                          transform: 'translate(-50%, -100%)',
                        }
                  }
                >
                  <FadeIn delay={i * 100 + 60} direction="none">
                    <p className="mb-0.5 text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                      {step.step}
                    </p>
                    <h3 className="text-sm font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-gray-500">
                      {step.description}
                    </p>
                  </FadeIn>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Mobile: vertical left-rail timeline ─────────────────────── */}
        <div className="relative md:hidden">
          <div className="absolute left-5 top-0 h-full w-px bg-linear-to-b from-indigo-500 to-indigo-100" />
          <div className="space-y-5">
            {processSteps.map((step, i) => {
              const Icon = STEP_ICONS[i]
              return (
                <FadeIn key={step.step} delay={i * 80}>
                  <div className="flex gap-5">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-indigo-600 shadow-md shadow-indigo-100">
                      <Icon size={16} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                        {step.step}
                      </p>
                      <h3 className="mb-1.5 text-sm font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
