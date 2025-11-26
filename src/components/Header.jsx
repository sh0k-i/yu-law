import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from './Logo'
import GoogleTranslate from './GoogleTranslate'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <motion.header 
      className="sticky top-0 z-50 transition-all duration-300"
      animate={{
        backgroundColor: isHomePage ? 'rgba(171, 21, 34, 1)' : (isScrolled ? 'rgba(171, 21, 34, 1)' : 'rgba(255, 255, 255, 0)'),
        boxShadow: (isHomePage || isScrolled) ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : '0 0 0 0 rgba(0, 0, 0, 0)'
      }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo variant="horizontal" color="white" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-acherus font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? isScrolled 
                        ? 'text-white border-b-2 border-white'
                        : 'text-white border-b-2 border-white'
                      : 'text-white hover:text-brand-cream'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:block mr-4">
            <GoogleTranslate isScrolled={isScrolled} />
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center mr-4">
            <a
              href="tel:+1-555-YU-LAW-01"
              className="flex items-center text-white hover:text-brand-cream transition-colors duration-200 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-acherus font-medium">
                940-239-9840
              </span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`px-6 py-3 font-acherus font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isScrolled 
                  ? 'bg-white text-brand-red hover:bg-brand-cream focus:ring-white focus:ring-offset-brand-red' 
                  : 'bg-brand-red text-white hover:bg-red-700 focus:ring-brand-red focus:ring-offset-transparent'
              }`}
            >
              Get Started Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 transition-all duration-300 text-white hover:text-brand-cream focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {!isMenuOpen ? (
                <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 md:hidden shadow-2xl z-50"
        >
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white">
            {/* Navigation Links */}
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                <Link
                  to={item.href}
                  className={`block px-4 py-3 text-lg font-acherus font-medium transition-all duration-200 border-l-4 ${
                    isActive(item.href)
                      ? 'text-brand-red bg-red-50 border-brand-red'
                      : 'text-brand-black hover:text-brand-red hover:bg-gray-50 border-transparent hover:border-brand-red'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Divider */}
            <div className="pt-4 pb-2">
              <div className="h-px bg-gray-200"></div>
            </div>
            
            {/* Phone Number */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="px-4 py-2"
            >
              <a
                href="tel:940-239-9840"
                className="flex items-center text-brand-black hover:text-brand-red transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 mr-3 text-brand-red group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-base font-acherus font-medium">
                  940-239-9840
                </span>
              </a>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="pt-2 px-4"
            >
              <Link
                to="/contact"
                className="btn-primary w-full text-center block py-4 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started Now
              </Link>
            </motion.div>
            
            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="pt-3 pb-2"
            >
              <div className="bg-gray-50 px-4 py-3 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span className="text-brand-black font-acherus font-medium text-sm">Language</span>
                  </div>
                  <GoogleTranslate />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
