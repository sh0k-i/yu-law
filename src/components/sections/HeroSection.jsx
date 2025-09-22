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
  const targetRecovered = 1000000 // $1,000,000
  
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
    return `$${num >= 1000000 ? '1M+' : num.toLocaleString()}`
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
    <section className="relative bg-gradient-to-br from-brand-cream to-brand-cream text-brand-black overflow-hidden -mt-20 pt-20 h-[800px]" >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-center h-full">
          <div className="flex h-full">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center z-10 pr-12 max-w-2xl">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-lancea text-brand-black mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="block relative">
                  {t('hero.title')}
                  <span className="absolute -bottom-1 left-0 w-20 h-1 bg-brand-red"></span>
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl font-acherus text-brand-gray mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {t('hero.description')}{' '}
                <a href="tel:940-239-9837" className="text-brand-red font-medium hover:underline transition-all">940-239-9837</a>
              </motion.p>

              {/* Languages Spoken */}
              <motion.div 
                className="mb-8 flex items-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brand-red"></div>
                  <span className="text-sm font-acherus text-brand-gray font-medium">
                    {t('hero.languages', 'We speak English, Spanish, Tagalog & Cebuano')}
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
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
                  className="border-2 border-brand-black text-brand-black px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-brand-black hover:text-white hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-black focus:ring-offset-2 focus:ring-offset-white text-center block w-full sm:w-auto min-w-[160px]"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Stats Section */}
            <motion.div
              ref={statsRef}
              className="grid grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="text-left">
                <div className="text-4xl md:text-5xl lg:text-6xl font-lancea text-brand-red mb-2">{formatNumber(cases)}</div>
                <div className="text-sm md:text-base font-acherus text-brand-gray leading-tight font-medium">Cases Successfully Handled</div>
              </div>
              
              <div className="text-left">
                <div className="text-4xl md:text-5xl lg:text-6xl font-lancea text-brand-red mb-2">{formatMoney(recovered)}</div>
                <div className="text-sm md:text-base font-acherus text-brand-gray leading-tight font-medium">Recovered for Clients</div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Hero Image (Content-hugging width) */}
          <div className="flex items-end h-full overflow-hidden flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex items-end h-full"
            >
              <img 
                src="/images/hero-photo.png" 
                alt="Attorney at Yu Law Firm" 
                className="object-contain object-bottom block"
                style={{ 
                  height: '90%',
                  width: 'auto',
                  transform: 'translateY(2px)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default HeroSection
