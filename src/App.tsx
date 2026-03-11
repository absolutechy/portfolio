import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Layout } from './components/Layout'

const HomePage = lazy(() => import('./pages/HomePage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

const PageFallback = () => <div className="min-h-screen" />

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Suspense fallback={<PageFallback />}><HomePage /></Suspense>} />
          <Route path="portfolio" element={<Suspense fallback={<PageFallback />}><PortfolioPage /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<PageFallback />}><ContactPage /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
