import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react'
import { personal } from '../../data/portfolio'
import { FadeIn } from '../ui/FadeIn'

const PHRASES = ['Sheraz Ahmed', 'a Frontend Developer', 'an Engineering Student']
const TYPE_SPEED = 80
const DELETE_SPEED = 45
const PAUSE_AFTER_TYPE = 2000
const PAUSE_AFTER_DELETE = 400

export function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const current = PHRASES[phraseIdx]

    if (isPaused) {
      const t = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(displayed.length > 0)
      }, displayed.length === current.length ? PAUSE_AFTER_TYPE : PAUSE_AFTER_DELETE)
      return () => clearTimeout(t)
    }

    if (!isDeleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), TYPE_SPEED)
      return () => clearTimeout(t)
    }

    if (!isDeleting && displayed.length === current.length) {
      setIsPaused(true)
      return
    }

    if (isDeleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), DELETE_SPEED)
      return () => clearTimeout(t)
    }

    if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setIsPaused(true)
      setPhraseIdx((i) => (i + 1) % PHRASES.length)
    }
  }, [displayed, phraseIdx, isDeleting, isPaused])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:pt-16 sm:px-6"
    >
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Availability badge */}
        {personal.available && (
          <FadeIn delay={0}>
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
                Available for opportunities
              </span>
            </div>
          </FadeIn>
        )}

        {/* Name heading */}
        <FadeIn delay={100}>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Hi, I'm{' '}
            <span className="text-indigo-600">
              {displayed}
              <span className="typewriter-cursor">|</span>
            </span>
          </h1>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={200}>
          <p className="mt-6 text-xl font-medium text-gray-500 md:text-2xl">
            {personal.tagline}
          </p>
        </FadeIn>

        {/* Sub-copy */}
        <FadeIn delay={300}>
          <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
            {personal.role} specializing in React, TypeScript, and modern web
            tooling. Based in {personal.location}.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={400}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-600"
            >
              View My Work
            </a>
            <a
              href={personal.cvUrl}
              download
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-indigo-600 hover:text-indigo-600"
            >
              Download CV
            </a>
          </div>
        </FadeIn>

        {/* Social icons */}
        <FadeIn delay={500}>
          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-400 transition-colors hover:text-gray-700"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-400 transition-colors hover:text-gray-700"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={personal.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              className="text-gray-400 transition-colors hover:text-gray-700"
            >
              <Twitter size={20} />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll cue */}
      <style>{`
        .typewriter-cursor {
          display: inline-block;
          margin-left: 2px;
          animation: cursorBlink 0.9s step-end infinite;
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

      <FadeIn delay={700} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-indigo-600"
        >
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </FadeIn>
    </section>
  )
}
