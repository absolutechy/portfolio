import { personal } from '../../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-center text-sm text-gray-400">
          © {year}{' '}
          <a
            href="#hero"
            className="text-gray-500 transition-colors hover:text-indigo-600"
          >
            {personal.name}
          </a>{' '}
          — Crafted with React &amp; ♥
        </p>
      </div>
    </footer>
  )
}
