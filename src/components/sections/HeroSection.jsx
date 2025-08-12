import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../Logo'

const HeroSection = () => {
  return (
    <section className="relative bg-brand-black text-white min-h-screen flex items-center overflow-hidden -mt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)'
        }}
      ></div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-lancea text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
            How Can YU Help?
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl font-acherus text-brand-cream mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Our law firm is committed to serving you and getting the justice you deserve! If you 
              or a loved one has been impacted by legal challenges, call us at{' '}
              <span className="text-brand-red font-medium">940-239-9837</span>
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="btn-primary text-center"
                >
                  Get Started Now
                </Link>
              </motion.div>
              {/* <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-brand-black hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black text-center"
              >
                OUR SERVICES
              </Link> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
