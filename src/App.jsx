import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieConsentModal from './components/CookieConsentModal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import Privacy from './pages/Privacy'

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <CookieConsentModal />
      </div>
    </Router>
  )
}

export default App
