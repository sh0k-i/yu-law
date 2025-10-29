import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null)
  const { t } = useTranslation()

  // Use dynamic translations with namespaces
  const faqs = [
    {
      question: t('faq.items.noWinNoFee.question'),
      answer: t('faq.items.noWinNoFee.answer')
    },
    {
      question: t('faq.items.freeConsultation.question'),
      answer: t('faq.items.freeConsultation.answer')
    },
    {
      question: t('faq.items.needAttorney.question'),
      answer: t('faq.items.needAttorney.answer')
    },
    {
      question: t('faq.items.contingencyFee.question'),
      answer: t('faq.items.contingencyFee.answer')
    },
    {
      question: t('faq.items.attorneyCost.question'),
      answer: t('faq.items.attorneyCost.answer')
    },
    {
      question: t('faq.items.caseWorth.question'),
      answer: t('faq.items.caseWorth.answer')
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        <div className="grid-responsive-2 items-start">
          {/* Left Column - Heading and Description */}
          <div className="lg:sticky lg:top-24">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lancea text-brand-black mb-6 sm:mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('faq.title')}
              <br />
              <span className="text-brand-red">ANSWERED</span>
            </motion.h2>
            
            <motion.p 
              className="body-lg text-brand-gray mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('faq.description')}
            </motion.p>

            <motion.p 
              className="body-md text-brand-gray mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t('faq.subDescription')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="btn-primary">
                  {t('faq.contactButton')}
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 sm:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 group touch-target"
                >
                  <h3 className="text-base sm:text-lg font-acherus text-brand-black pr-4 group-hover:text-brand-red transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <svg 
                      className={`w-4 h-4 text-brand-red transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-45' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 sm:pb-6 pr-8 sm:pr-10">
                    <p className="body-md text-brand-gray">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
