import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { personal } from '../../data/portfolio'
import { ContactForm } from '../ui/ContactForm'
import { FadeIn } from '../ui/FadeIn'
import { SectionTitle } from '../ui/SectionTitle'

export function Contact() {
  return (
    <section id="contact" className="border-t border-gray-100 bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <FadeIn>
          <SectionTitle
            eyebrow="Get In Touch"
            title="Let's Work Together"
            subtitle="Have a project in mind or want to chat about opportunities? I'd love to hear from you."
            align="center"
            className="mb-12"
          />
        </FadeIn>

        <div className="mx-auto max-w-lg">
          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Github size={17} />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Mail size={17} />
                Email
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
              >
                <Twitter size={17} />
                Twitter
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

