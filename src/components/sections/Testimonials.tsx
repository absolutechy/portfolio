import { Quote } from 'lucide-react'
import { testimonials } from '../../data/portfolio'
import { FadeIn } from '../ui/FadeIn'
import { SectionTitle } from '../ui/SectionTitle'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn>
          <SectionTitle
            eyebrow="Social Proof"
            title="What People Say"
            subtitle="Kind words from colleagues and clients I've had the pleasure of working with."
            align="center"
            className="mb-12"
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={i * 100}>
              <blockquote className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <Quote size={22} className="mb-4 shrink-0 text-indigo-200" aria-hidden="true" />
                <p className="flex-1 text-sm leading-relaxed text-gray-600">"{t.quote}"</p>
                <footer className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${t.accentClass}`}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
