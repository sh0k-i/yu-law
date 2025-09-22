import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const SettlementsSection = () => {
  const { t } = useTranslation()
  const settlements = [
    {
      case: "Personal Injury - Motor Vehicle Accident",
      amount: "$2,500,000",
      description: "Secured maximum compensation for client with severe spinal injuries after truck collision"
    },
    {
      case: "Medical Malpractice - Surgical Error",
      amount: "$1,850,000",
      description: "Successfully represented family in wrongful death case due to hospital negligence"
    },
    {
      case: "Product Liability - Defective Equipment",
      amount: "$3,200,000",
      description: "Won landmark case against manufacturer for defective industrial machinery"
    },
    {
      case: "Workers' Compensation - Workplace Injury",
      amount: "$950,000",
      description: "Obtained full benefits and compensation for construction worker injury"
    },
    {
      case: "Premises Liability - Slip and Fall",
      amount: "$675,000",
      description: "Achieved favorable settlement for client injured on commercial property"
    },
    {
      case: "Auto Accident - Multiple Vehicles",
      amount: "$1,400,000",
      description: "Negotiated comprehensive settlement covering all medical expenses and damages"
    },
    {
      case: "Wrongful Death - Medical Negligence",
      amount: "$2,100,000",
      description: "Secured justice for family after preventable hospital error resulted in tragic loss"
    },
    {
      case: "Construction Accident - Safety Violation",
      amount: "$1,750,000",
      description: "Maximum recovery for worker injured due to contractor safety violations"
    }
  ]

  // Duplicate settlements for continuous scroll
  const duplicatedSettlements = [...settlements, ...settlements]

  return (
    <section className="py-20 bg-brand-black overflow-hidden relative">
      {/* Elegant Background with Spotlights */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-black to-gray-800"></div>
      {/* Central blue spotlight */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 opacity-[0.04] blur-3xl"></div>
      
      {/* Gradient Overlays for Smooth Edges - Moved to parent section */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-black to-transparent pointer-events-none z-20"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-black to-transparent pointer-events-none z-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-lancea text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('settlements.title', 'SETTLEMENTS BY YU')}
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-lg font-acherus text-brand-cream max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('settlements.description', "Real results for real people. See how we've secured life-changing settlements for our clients.")}
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
                className="flex-shrink-0 w-[450px] bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Case Type - At Top */}
                <h3 className="text-lg font-lancea text-white mb-6 text-center group-hover:text-brand-cream transition-colors duration-300">
                  {settlement.case}
                </h3>

                {/* Settlement Amount - Large and Centered */}
                <div className="text-center mb-6">
                  <div className="text-4xl md:text-5xl font-lancea text-brand-red font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
                    {settlement.amount}
                  </div>
                  <div className="w-20 h-1 bg-brand-red mx-auto opacity-80"></div>
                </div>

                {/* Description - At Bottom */}
                <p className="text-brand-cream font-acherus text-center leading-relaxed group-hover:text-white transition-colors duration-300">
                  {settlement.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action - Moved Below Marquee */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-brand-cream font-acherus text-lg mb-6">
            {t('settlements.ctaText', 'Ready to secure the settlement you deserve?')}
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
