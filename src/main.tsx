import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import './news.css'
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
const Corporate  = lazy(() => import('./pages/seo/Corporate.tsx'))
const ViolinDJ   = lazy(() => import('./pages/seo/ViolinDJ.tsx'))
const Hamptons   = lazy(() => import('./pages/seo/Hamptons.tsx'))
const PianoDJ    = lazy(() => import('./pages/seo/PianoDJ.tsx'))
const DestinationDJ = lazy(() => import('./pages/seo/DestinationDJ.tsx'))
const WeddingDJ  = lazy(() => import('./pages/seo/WeddingDJ.tsx'))
const AfrobeatsDJ = lazy(() => import('./pages/seo/AfrobeatsDJ.tsx'))
const RBHipHopDJ  = lazy(() => import('./pages/seo/RBHipHopDJ.tsx'))
const DJForHireNYC = lazy(() => import('./pages/seo/DJForHireNYC.tsx'))
const NewYearsEveDJ = lazy(() => import('./pages/seo/NewYearsEveDJ.tsx'))
const PrivatePartyDJ = lazy(() => import('./pages/seo/PrivatePartyDJ.tsx'))
const HipHopDJ    = lazy(() => import('./pages/seo/HipHopDJ.tsx'))
const Sweet16DJ   = lazy(() => import('./pages/seo/Sweet16DJ.tsx'))
const RooftopDJ   = lazy(() => import('./pages/seo/RooftopDJ.tsx'))
const RnBDJ       = lazy(() => import('./pages/seo/RnBDJ.tsx'))
const HouseJerseyClubDJ = lazy(() => import('./pages/seo/HouseJerseyClubDJ.tsx'))
const News              = lazy(() => import('./pages/News.tsx'))
const NewsArticle       = lazy(() => import('./pages/NewsArticle.tsx'))

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
            <Route path="/corporate-event-dj-nyc-nj-ct" element={<Corporate />} />
            <Route path="/violin-dj-duo-nyc-nj" element={<ViolinDJ />} />
            <Route path="/piano-dj-duo-nyc-nj" element={<PianoDJ />} />
            <Route path="/hamptons-luxury-dj" element={<Hamptons />} />
            <Route path="/destination-wedding-dj" element={<DestinationDJ />} />
            <Route path="/wedding-dj-nyc-nj" element={<WeddingDJ />} />
            <Route path="/afrobeats-amapiano-dj-nyc-nj" element={<AfrobeatsDJ />} />
            <Route path="/rb-hip-hop-dj-nyc-nj" element={<RBHipHopDJ />} />
            <Route path="/dj-for-hire-nyc" element={<DJForHireNYC />} />
            <Route path="/new-years-eve-dj-nyc" element={<NewYearsEveDJ />} />
            <Route path="/private-party-dj-nyc-nj" element={<PrivatePartyDJ />} />
            <Route path="/hip-hop-dj-nyc-nj" element={<HipHopDJ />} />
            <Route path="/sweet-16-dj-nyc-nj" element={<Sweet16DJ />} />
            <Route path="/rooftop-party-dj-nyc" element={<RooftopDJ />} />
            <Route path="/rb-dj-nyc-nj" element={<RnBDJ />} />
            <Route path="/house-jersey-club-dj-nyc-nj" element={<HouseJerseyClubDJ />} />
            <Route path="/news"           element={<News />} />
            <Route path="/news/:slug"     element={<NewsArticle />} />
          </Routes>
        </Suspense>
        </PlayerProvider>
        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
