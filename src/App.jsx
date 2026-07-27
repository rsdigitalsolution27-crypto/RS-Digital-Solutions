import { Routes, Route } from 'react-router-dom'
import { Component, Suspense, lazy } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import Chatbot from './components/Chatbot'
import SmoothScroll from './components/SmoothScroll'
import GrainOverlay from './components/GrainOverlay'
import { useScrollAnimations } from './components/ScrollAnimations'
import { ui } from './content'
import Home from './pages/Home'

// Route-Splitting: nur Home ist im Haupt-Bundle (LCP), alle anderen Seiten
// laden als eigene Chunks.
const Leistungen = lazy(() => import('./pages/Leistungen'))
const About = lazy(() => import('./pages/About'))
const FortyEightHours = lazy(() => import('./pages/FortyEightHours'))
const KI = lazy(() => import('./pages/KI'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Datenschutz = lazy(() => import('./pages/Datenschutz'))
const NotFound = lazy(() => import('./pages/NotFound'))

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('Page render error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return <div style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2>{ui.errorBoundary.heading}</h2>
        <p>{ui.errorBoundary.message}</p>
      </div>;
    }
    return this.props.children;
  }
}


function App() {
  useScrollAnimations()

  return (
    <HelmetProvider>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <SmoothScroll />
      <GrainOverlay />
      <Navbar />
      <ErrorBoundary>
        <main id="main-content">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/about" element={<About />} />
            <Route path="/48h" element={<FortyEightHours />} />
            <Route path="/ki" element={<KI />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </main>
      </ErrorBoundary>
      <Footer />
      <Chatbot />
      <BackToTop />
      <Analytics />
    </HelmetProvider>
  )
}

export default App
