import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useRef, useState, useEffect } from 'react'

const HeroSection = () => {
  const { t } = useTranslation()
  
  // State for animated counters
  const [cases, setCases] = useState(0)
  const [recovered, setRecovered] = useState(0)
  
  // Target values
  const targetCases = 200
  const targetRecovered = 3000000 // $1,000,000
  
  // References
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, amount: 0.3 })
  
  // Animation function for counting
  const animateValue = (start, end, duration, setValue) => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const value = Math.floor(progress * (end - start) + start)
      setValue(value)
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }
  
  // Format functions
  const formatMoney = (num) => {
    return `$${num >= 3000000 ? '3M+' : num.toLocaleString()}`
  }

  const formatNumber = (num) => {
    return num >= 200 ? '200+' : num.toLocaleString()
  }

  
  useEffect(() => {
    if (isInView) {
      // Start animations with slight delays
      setTimeout(() => animateValue(0, targetCases, 2000, setCases), 300)
      setTimeout(() => animateValue(0, targetRecovered, 2500, setRecovered), 500)
    }
  }, [isInView])

  return (
    <section className="relative bg-gradient-to-br from-brand-cream to-gray-200 text-brand-black overflow-hidden -mt-20 pt-20 min-h-[600px] md:h-[800px]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col md:flex-row justify-center h-full">
          <div className="flex flex-col md:flex-row h-full w-full md:w-auto">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center z-10 md:pr-12 max-w-2xl pt-8 md:pt-0">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-lancea text-brand-black mb-4 md:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="block relative">
                  {t('hero.title')}
                  <span className="absolute -bottom-1 left-0 w-16 sm:w-20 h-1 bg-brand-red"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl font-acherus text-brand-gray mb-4 md:mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {t('hero.description')}{' '}
                <a href="tel:940-239-9840" className="text-brand-red font-medium hover:underline transition-all">940-239-9840</a>
              </motion.p>

              {/* Languages Spoken */}
              <motion.div 
                className="mb-6 md:mb-8 flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-red"></div>
                  <div className="text-xs sm:text-sm font-acherus text-brand-gray font-medium">
                    {t('hero.languages')}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="btn-primary text-center block w-full sm:w-auto min-w-[160px]"
                >
                  {t('hero.cta')}
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/services"
                  className="btn-secondary text-center block w-full sm:w-auto min-w-[160px]"
                >
                  {t('hero.ourServices')}
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Stats Section */}
            <motion.div
              ref={statsRef}
              className="grid grid-cols-2 gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lancea text-brand-red mb-2">{formatNumber(cases)}</div>
                <div className="text-xs sm:text-sm md:text-base font-acherus text-brand-gray leading-tight font-medium">{t('hero.casesHandled')}</div>
              </div>
              
              <div className="text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lancea text-brand-red mb-2">{formatMoney(recovered)}</div>
                <div className="text-xs sm:text-sm md:text-base font-acherus text-brand-gray leading-tight font-medium">{t('hero.recoveredForClients')}</div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Hero Image (Desktop: side by side, Mobile: below) */}
          <div className="hidden md:flex items-end h-full overflow-hidden flex-shrink-0 relative">
            {/* Subtle gradient spotlight behind photo */}
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-white/100 via-brand-cream/20 to-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              style={{
                background: 'radial-gradient(ellipse 500px 700px at 50% 60%, rgba(255,255,255,0.3), rgba(250,245,235,0.3) 40%, transparent 70%)'
              }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-end h-full relative z-10"
            >
              <img 
                src="/images/hero-photo.png" 
                alt="Attorney at Yu Law Firm" 
                className="object-contain object-bottom block"
                style={{ 
                  height: '95%',
                  width: 'auto',
                  transform: 'translateY(2px)'
                }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Mobile Photo - Below content */}
        <div className="md:hidden flex justify-center items-end mt-8 relative h-64 sm:h-80">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-end h-full relative z-10"
          >
            <img 
              src="/images/hero-photo.png" 
              alt="Attorney at Yu Law Firm" 
              className="object-contain object-bottom block h-full w-auto"
            />
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
