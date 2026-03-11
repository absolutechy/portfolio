import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { personal } from '../../data/portfolio'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = personal.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-sm font-bold tracking-tight text-gray-900 hover:text-indigo-600 transition-colors"
        >
          {initials}
          <span className="text-indigo-600">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium transition-colors hover:text-indigo-600',
                    isActive ? 'text-indigo-600 font-semibold' : 'text-gray-600',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-600"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:text-gray-900 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-6 pt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block text-sm font-medium transition-colors hover:text-indigo-600',
                      isActive ? 'text-indigo-600 font-semibold' : 'text-gray-600',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Hire Me
          </Link>
        </div>
      )}
    </header>
  )
}