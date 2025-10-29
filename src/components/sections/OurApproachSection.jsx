import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const OurApproachSection = () => {
  const { t } = useTranslation()

  const approachSteps = [
    {
      number: '1',
      title: t('approach.steps.evaluation.title'),
      description: t('approach.steps.evaluation.description')
    },
    {
      number: '2', 
      title: t('approach.steps.planning.title'),
      description: t('approach.steps.planning.description')
    },
    {
      number: '3',
      title: t('approach.steps.resolution.title'),
      description: t('approach.steps.resolution.description')
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        <div className="grid-responsive-2 items-end">
          
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg text-brand-black mb-4 sm:mb-6">
                {t('approach.title')}
              </h2>
              <div className="accent-line mb-6 sm:mb-8"></div>
              <p className="body-lg text-brand-gray mb-8 sm:mb-12">
                {t('approach.description')}
              </p>
            </motion.div>

            {/* Consultation Image */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative group h-64 sm:h-80 md:h-96"
            >
              <div className="relative h-full bg-gradient-to-br from-brand-gray to-brand-black flex items-center justify-center overflow-hidden">
                <img src="/images/media1.jpg" alt="Consultation" className="img-responsive h-full" />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Steps */}
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-1 relative"
            >
              {/* Vertical connecting line - Hidden on mobile */}
              <motion.div 
                className="hidden md:block absolute left-[20px] top-16 bottom-16 w-0.5 bg-brand-red"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
              ></motion.div>
              {/* Steps Header */}
              <motion.div
                variants={itemVariants}
                className="mb-8 md:mb-44"
              >
              </motion.div>

              {/* Steps List */}
              {approachSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.0 + index * 0.2,
                    ease: "easeOut"
                  }}
                  className="flex items-start space-x-4 sm:space-x-6 py-4 sm:py-6 group hover:bg-white/50 transition-all duration-300 card-padding -mx-4 sm:-mx-6 relative"
                >
                  {/* Step Number */}
                  <motion.div 
                    className="flex-shrink-0 relative z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-lancea text-lg font-bold border-2 border-white shadow-md"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.2 + index * 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {step.number}
                    </motion.div>
                  </motion.div>
                  
                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className="heading-sm text-brand-black mb-2 sm:mb-3 group-hover:text-brand-red transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="body-md text-brand-gray">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="pt-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="btn-primary inline-block"
                  >
                    {t('approach.cta')}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurApproachSection
