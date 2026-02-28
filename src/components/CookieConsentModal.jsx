import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getCookieConsent, setCookieConsent, needsConsent } from '../utils/cookieConsent'

const CookieConsentModal = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    if (needsConsent()) {
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    setCookieConsent({
      analytics: true,
      functional: true
    })
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 left-6 z-50 bg-brand-red text-white shadow-2xl max-w-md"
        initial={{ opacity: 0, x: -100, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -100, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="p-6">
          <h3 className="text-xl font-lancea mb-3">
            This website uses cookies.
          </h3>
          <p className="text-sm font-acherus text-white/90 mb-5 leading-relaxed">
            We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies, your data will be aggregated with all other user data.
          </p>
          <button
            onClick={handleAccept}
            className="w-full bg-white text-brand-red px-6 py-3 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-brand-cream focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red"
          >
            ACCEPT
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CookieConsentModal
