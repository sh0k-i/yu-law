import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const SettlementsSection = () => {
  const { t } = useTranslation()
  const settlements = [
    {
      case: "Motor Vehicle Collision",
      amount: "$60,000",
      description: "At-fault driver made an unsafe left turn"
    },
    {
      case: "Motor Vehicle Collision",
      amount: "$57,000",
      description: "At-fault driver rear-ended my Client's vehicle and was then pushed into the vehicle in front of them"
    },
    {
      case: "Premises Liability",
      amount: "$20,000",
      description: "At-fault employer failed to maintain a safe working environment"
    },
    {
      case: "Motor Vehicle Collision",
      amount: "$47,000",
      description: "At-fault driver ran a red light and T-boned our Client's vehicle"
    },
    {
      case: "18-Wheeler/Trucking Collision",
      amount: "$500,000",
      description: "At-fault driver ran a red light and T-boned our Client"
    },
    {
      case: "Motor Vehicle Collision",
      amount: "$30,000",
      description: "At-fault driver rear-ended our Client's car"
    },
    {
      case: "Motor Vehicle Collision",
      amount: "$30,000",
      description: "At-fault driver ran a stop sign and T-boned our Client's"
    },
    {
      case: "Motor Vehicle Collision",
      amount: "$35,000",
      description: "At-fault driver ran a red light and T-boned the car our Client was a passenger in"
    },
  ]

  // Duplicate settlements for continuous scroll
  const duplicatedSettlements = [...settlements, ...settlements]

  return (
    <section className="section-padding bg-brand-black overflow-hidden relative">
      {/* Elegant Background with Spotlights */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-black to-gray-800"></div>
      {/* Central blue spotlight */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 opacity-[0.04] blur-3xl"></div>
      
      {/* Gradient Overlays for Smooth Edges - Moved to parent section */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-black to-transparent pointer-events-none z-20"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-black to-transparent pointer-events-none z-20"></div>
      
      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            className="heading-lg text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('settlements.title')}
          </motion.h2>
          <motion.div 
            className="accent-line bg-brand-red mx-auto mb-6 sm:mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="body-lg text-brand-cream max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('settlements.description')}
          </motion.p>
        </div>

      </div>

      {/* Full Width Marquee Container */}
      <div className="w-full relative z-10 mb-16">
        {/* Left red spotlight */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-red opacity-[0.06] blur-3xl"></div>
        {/* Right red spotlight */}
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-red opacity-[0.06] blur-3xl"></div>
        
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 min-w-max"
            animate={{
              x: [0, -50 + '%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 120,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate settlements for seamless loop */}
            {[...settlements, ...settlements].map((settlement, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[450px] bg-white/5 backdrop-blur-sm border border-white/10 card-padding hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Case Type - At Top */}
                <h3 className="heading-sm text-white mb-4 sm:mb-6 text-center group-hover:text-brand-cream transition-colors duration-300">
                  {settlement.case}
                </h3>

                {/* Settlement Amount - Large and Centered */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="stat-number text-brand-red font-bold mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                    {settlement.amount}
                  </div>
                  <div className="w-16 sm:w-20 h-1 bg-brand-red mx-auto opacity-80"></div>
                </div>

                {/* Description - At Bottom */}
                <p className="body-md text-brand-cream text-center group-hover:text-white transition-colors duration-300">
                  {settlement.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action - Moved Below Marquee */}
      <div className="container-responsive relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="body-lg text-brand-cream mb-4 sm:mb-6">
            {t('settlements.ctaText')}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="btn-primary">
              {t('header.getStarted')}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SettlementsSection
