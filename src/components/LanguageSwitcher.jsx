import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSwitcher = ({ isScrolled = false }) => {
  const { t } = useTranslation()
  const { languages, currentLanguage: langCode, changeLanguage, getCurrentLanguageInfo } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  
  // Get current language with translated name
  const currentLanguage = {
    ...getCurrentLanguageInfo(),
    name: t(`languageNames.${langCode}`)
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

  // Handle language change with context
  const handleLanguageChange = (code) => {
    changeLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 px-3 py-2 transition-all duration-300 ${
          isScrolled
            ? 'text-white hover:bg-white hover:bg-opacity-20' 
            : 'text-white hover:text-brand-cream'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-xl mr-1">{currentLanguage.flag}</span>
        <span className="text-sm font-acherus font-medium hidden sm:block">{currentLanguage.name}</span>
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
                    langCode === language.code ? 'bg-gray-100 text-brand-red' : 'text-brand-black'
                  } group flex items-center w-full px-4 py-3 text-sm hover:bg-gray-50 hover:text-brand-red transition-colors duration-200`}
                  role="menuitem"
                >
                  <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-200">{language.flag}</span>
                  <span className="font-acherus">{language.name}</span>
                  {langCode === language.code && (
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

export default LanguageSwitcher
