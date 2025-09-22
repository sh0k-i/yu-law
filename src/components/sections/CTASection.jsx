import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const CTASection = () => {
  const { t } = useTranslation()
  return (
    <section className="py-20 bg-brand-red text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-lancea text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('cta.title', 'Ready to Get Started?')}
        </motion.h2>
        <motion.p 
          className="text-xl font-acherus text-white mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('cta.description', "Don't face your legal challenges alone. Contact Yu Law Firm today for a free consultation and let us help you navigate your path to justice.")}
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-white text-brand-red px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-brand-cream hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red text-center block w-full sm:w-auto min-w-[160px]"
            >
              {t('header.getStarted')}
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="tel:940-239-9837"
              className="border-2 border-white text-white px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-brand-red hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red text-center block w-full sm:w-auto min-w-[160px]"
            >
              {t('cta.callNow', 'Call Now: 940-239-9837')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
