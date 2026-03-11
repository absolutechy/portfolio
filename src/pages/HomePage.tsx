import { lazy, Suspense } from 'react'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Skills } from '../components/sections/Skills'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'

const Testimonials = lazy(() =>
  import('../components/sections/Testimonials').then((m) => ({ default: m.Testimonials })),
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Suspense fallback={<div className="h-48" />}>
        <Testimonials />
      </Suspense>
    </>
  )
}
