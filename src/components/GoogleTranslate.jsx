import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GoogleTranslate = ({ isScrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('en')
  const [isGoogleTranslateReady, setIsGoogleTranslateReady] = useState(false)
  const dropdownRef = useRef(null)
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
    { code: 'ceb', name: 'Cebuano', flag: '🇵🇭' },
  ]

  const getCurrentLanguageInfo = () => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0]
  }

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Detect current language from Google Translate cookie
  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`
      const parts = value.split(`; ${name}=`)
      if (parts.length === 2) return parts.pop().split(';').shift()
      return null
    }
    
    const googtransCookie = getCookie('googtrans')
    
    if (googtransCookie) {
      // Cookie format is "/en/es" where "es" is the target language
      const parts = googtransCookie.split('/')
      if (parts.length >= 3) {
        const targetLang = parts[2]
        setCurrentLanguage(targetLang || 'en')
      }
    }
  }, [])
  
  // Wait for Google Translate to initialize
  useEffect(() => {
    let attempts = 0
    const maxAttempts = 50 // 5 seconds
    
    const waitForGoogleTranslate = setInterval(() => {
      attempts++
      
      // Google Translate creates a gadget with a link, not a select dropdown
      const gtGadget = document.querySelector('.goog-te-gadget-simple')
      const gtLink = document.querySelector('.goog-te-gadget-simple a')
      
      if (gtGadget && gtLink) {
        setIsGoogleTranslateReady(true)
        clearInterval(waitForGoogleTranslate)
      } else if (attempts >= maxAttempts) {
        clearInterval(waitForGoogleTranslate)
      }
    }, 100)

    return () => clearInterval(waitForGoogleTranslate)
  }, [])

  const handleLanguageChange = (code) => {
    // If English is selected, clear the translation to show original content
    if (code === 'en') {
      // Clear Google Translate cookies
      const domain = window.location.hostname
      document.cookie = `googtrans=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 GMT`
      document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
      
      // Reload to show original English content
      window.location.reload()
      setCurrentLanguage('en')
      setIsOpen(false)
      return
    }
    
    // For other languages, set the translation cookie
    if (window.google && window.google.translate) {
      try {
        // Set a cookie that Google Translate uses
        const domain = window.location.hostname
        const cookieName = 'googtrans'
        const cookieValue = `/en/${code}`
        document.cookie = `${cookieName}=${cookieValue};path=/;domain=${domain}`
        document.cookie = `${cookieName}=${cookieValue};path=/`
        
        // Reload to apply translation
        window.location.reload()
        
        setCurrentLanguage(code)
        setIsOpen(false)
        return
      } catch (e) {
        // Silently fail
      }
    }
    
    // Fallback: Try to find and use the select dropdown
    const gtCombo = document.querySelector('.goog-te-combo')
    if (gtCombo) {
      gtCombo.value = code
      gtCombo.dispatchEvent(new Event('change', { bubbles: true }))
      setCurrentLanguage(code)
    }
    
    setIsOpen(false)
  }

  const currentLangInfo = getCurrentLanguageInfo()

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ 
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        visibility: 'hidden',
        pointerEvents: 'none'
      }}></div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 px-3 py-2 transition-all duration-300 ${
          isScrolled
            ? 'text-white hover:bg-white hover:bg-opacity-20' 
            : 'text-white hover:text-brand-cream'
        } ${!isGoogleTranslateReady ? 'opacity-50 cursor-wait' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        disabled={!isGoogleTranslateReady}
        title={!isGoogleTranslateReady ? 'Loading translator...' : 'Select language'}
      >
        <span className="text-xl mr-1">{currentLangInfo.flag}</span>
        <span className="text-sm font-acherus font-medium hidden sm:block">{currentLangInfo.name}</span>
        <svg
          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
          >
            <div className="py-1" role="none">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`${
                    currentLanguage === language.code ? 'bg-gray-100 text-brand-red' : 'text-brand-black'
                  } group flex items-center w-full px-4 py-3 text-sm hover:bg-gray-50 hover:text-brand-red transition-colors duration-200`}
                  role="menuitem"
                >
                  <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-200">{language.flag}</span>
                  <span className="font-acherus">{language.name}</span>
                  {currentLanguage === language.code && (
                    <svg className="ml-auto h-4 w-4 text-brand-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default GoogleTranslate
