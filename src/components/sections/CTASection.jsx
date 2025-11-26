import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="section-padding bg-brand-red text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="heading-lg text-white mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p 
          className="body-lg text-white mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Don't face your legal challenges alone. Contact Yu Law Firm today for a free consultation and let us help you navigate your path to justice.
        </motion.p>
        <motion.div 
          className="flex-responsive justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="bg-white text-brand-red px-6 sm:px-8 py-3 sm:py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-brand-cream hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red btn-mobile"
            >
              Get Started Now
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <a
              href="tel:940-239-9840"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-brand-red hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red btn-mobile"
            >
              Call Now: 940-239-9840
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
