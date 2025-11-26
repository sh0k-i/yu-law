import { motion } from 'framer-motion'

const SettlementsSection = () => {
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
    <section className="section-padding bg-brand-red overflow-hidden relative">
      {/* Gradient Overlays for Smooth Edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-brand-red to-transparent pointer-events-none z-20"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-brand-red to-transparent pointer-events-none z-20"></div>
      
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
            SETTLEMENTS BY YU
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
            Real results for real people. See how we've secured life-changing settlements for our clients.
          </motion.p>
        </div>

      </div>

      {/* Full Width Marquee Container */}
      <div className="w-full relative z-10 ">
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
                <h3 className="heading-sm text-white/50 mb-4 sm:mb-6 text-center group-hover:text-brand-cream transition-colors duration-300">
                  {settlement.case}
                </h3>

                {/* Settlement Amount - Large and Centered */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="stat-number text-white font-bold mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                    {settlement.amount}
                  </div>
                  <div className="w-16 sm:w-20 h-1 bg-white mx-auto opacity-80"></div>
                </div>

                {/* Description - At Bottom */}
                <p className="body-md text-white/50 text-center group-hover:text-white transition-colors duration-300">
                  {settlement.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SettlementsSection
