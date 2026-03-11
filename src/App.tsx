import { lazy, Suspense } from 'react'
import { Navbar } from './components/sections/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'

// Below-the-fold sections are lazy-loaded — deferred JS on slow connections
const Testimonials = lazy(() =>
  import('./components/sections/Testimonials').then((m) => ({ default: m.Testimonials })),
)
const Contact = lazy(() =>
  import('./components/sections/Contact').then((m) => ({ default: m.Contact })),
)
const Footer = lazy(() =>
  import('./components/sections/Footer').then((m) => ({ default: m.Footer })),
)

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Suspense fallback={<div className="h-32" />}>
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
