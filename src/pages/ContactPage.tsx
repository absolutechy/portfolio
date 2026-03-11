import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { ComponentTreeIllustration } from '../components/ui/ComponentTreeIllustration'
import { ContactForm } from '../components/ui/ContactForm'
import { FadeIn } from '../components/ui/FadeIn'
import { personal } from '../data/portfolio'

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">

          {/* ── Left: copy + social links + illustration ──────────────── */}
          <FadeIn direction="left">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                Contact
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Let's build something great together.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-gray-500">
                Whether you have a project to discuss, a role to fill, or just want to say hello —
                my inbox is always open. I typically reply within 24 hours.
              </p>

              {/* Social links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-600"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-600"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-600"
                >
                  <Mail size={16} /> Email
                </a>
                <a
                  href={personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-600"
                >
                  <Twitter size={16} /> Twitter
                </a>
              </div>

              {/* Component tree illustration */}
              <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
                <ComponentTreeIllustration />
                <p className="mt-4 text-center text-xs text-gray-400">
                  A glimpse at how I think about component architecture.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* ── Right: Contact form ────────────────────────────────────── */}
          <FadeIn direction="right" delay={100}>
            <div>
              <h2 className="mb-6 text-xl font-semibold text-gray-900">Send me a message</h2>
              <ContactForm />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
