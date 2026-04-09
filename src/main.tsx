import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './components/CartContext.tsx'
import { PlayerProvider } from './components/PlayerContext.tsx'
import { ToastProvider } from './components/Toast.tsx'

// Lazy load all non-home routes — they only download when first visited
const EPK        = lazy(() => import('./pages/EPK.tsx'))
const Admin      = lazy(() => import('./pages/Admin.tsx'))
const Terms      = lazy(() => import('./pages/Terms.tsx'))
const Privacy    = lazy(() => import('./pages/Privacy.tsx'))
const Refunds    = lazy(() => import('./pages/Refunds.tsx'))
const SoulShades = lazy(() => import('./pages/SoulShades.tsx'))
const Music      = lazy(() => import('./pages/Music.tsx'))
const Pricing    = lazy(() => import('./pages/Pricing.tsx'))

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash) as HTMLElement | null
        if (el) {
          const nav = document.querySelector('.nav') as HTMLElement | null
          const offset = (nav?.offsetHeight ?? 70) + 16
          const top = el.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }, 120)
    } else {
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }), 0)
    }
  }, [pathname, hash])
  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <CartProvider>
        <ToastProvider>
        <PlayerProvider>
        <ScrollManager />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/"           element={<App />} />
            <Route path="/epk"        element={<EPK />} />
            <Route path="/admin"      element={<Admin />} />
            <Route path="/terms"      element={<Terms />} />
            <Route path="/privacy"    element={<Privacy />} />
            <Route path="/refunds"    element={<Refunds />} />
            <Route path="/soul-shades" element={<SoulShades />} />
            <Route path="/music"      element={<Music />} />
            <Route path="/pricing"    element={<Pricing />} />
          </Routes>
        </Suspense>
        </PlayerProvider>
        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
