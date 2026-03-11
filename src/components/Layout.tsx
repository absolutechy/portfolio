import { Outlet } from 'react-router'
import { Navbar } from './sections/Navbar'
import { Footer } from './sections/Footer'
import { ScrollToTop } from './ScrollToTop'

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
