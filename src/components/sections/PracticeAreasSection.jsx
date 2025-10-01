import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const PracticeAreasSection = () => {
  const { t } = useTranslation()
  
  // Focus exclusively on Personal Injury
  const personalInjury = {
    id: 'personalInjury',
    title: t('practiceAreas.personalInjury.title'),
    description: t('practiceAreas.personalInjury.description'),
    detailedDescription: t('practiceAreas.personalInjury.detailedDescription'),
    image: '/images/practice-areas/personal-injury.jpg',
    services: t('practiceAreas.personalInjury.services', { returnObjects: true })
  }
  
  // Additional Personal Injury information
  const injuryTypes = [
    {
      title: "Car Accidents",
      description: "Comprehensive representation for victims of automobile accidents, helping you recover damages for medical expenses, lost wages, and pain and suffering.",
      icon: "car"
    },
    {
      title: "Slip and Fall",
      description: "If you've been injured on someone else's property due to negligence, we'll help establish liability and pursue the compensation you deserve.",
      icon: "warning"
    },
    {
      title: "Animal Liability",
      description: "Representing victims of dog bites and animal attacks. We hold negligent pet owners accountable for injuries caused by their animals.",
      icon: "animal"
    },
    {
      title: "Product Liability",
      description: "Taking action against manufacturers, distributors, and sellers of defective products that caused injuries to you or a loved one.",
      icon: "scale"
    },
    {
      title: "Workplace Injuries",
      description: "Navigating complex workers' compensation claims and identifying potential third-party liability to maximize your recovery.",
      icon: "briefcase"
    },
    {
      title: "Wrongful Death",
      description: "Compassionate representation for families who have lost loved ones due to another's negligence or intentional actions.",
      icon: "shield"
    }
  ]

  // Animation variants for elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-lancea text-brand-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            PERSONAL INJURY LAW
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-lg font-acherus text-brand-gray max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Yu Law Firm, we specialize exclusively in Personal Injury Law. Our dedicated team fights tirelessly for clients who have suffered injuries due to others' negligence, ensuring you receive the compensation and justice you deserve.
          </motion.p>
        </div>



        {/* Detailed Injury Types Section */}
        <div className="mb-20">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {injuryTypes.map((type, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl group relative overflow-hidden"
              >
                {/* Red accent line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-red group-hover:h-full group-hover:w-full group-hover:opacity-10 transition-all duration-500"></div>
                
                {/* Icon */}
                <div className="mb-6 flex items-center">
                  <div className=" flex items-center  mr-4 group-hover:bg-brand-red/10 transition-colors duration-300">
                    {type.icon === "car" && (
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {type.icon === "warning" && (
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                    {type.icon === "animal" && (
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    )}
                    {type.icon === "briefcase" && (
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {type.icon === "shield" && (
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {type.icon === "scale" && (
                      <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2M3 16V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      </svg>
                    )}
                  </div>
                  <h4 className="text-xl font-lancea text-brand-black group-hover:text-brand-red transition-colors duration-300">{type.title}</h4>
                </div>
                
                {/* Description */}
                <p className="text-brand-gray font-acherus leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-brand-red to-red-800 overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
            <div className="flex-1 mb-8 md:mb-0">
              <motion.h3 
                className="text-3xl md:text-4xl font-lancea text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Injured? We Can Help.
              </motion.h3>
              <motion.p
                className="text-white/80 text-lg font-acherus leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Don't face the insurance companies alone. Our experienced team is ready to fight for the compensation you deserve. Free consultation – no fee unless we win.
              </motion.p>
            </div>
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-white text-brand-red py-4 px-8 font-acherus font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
              >
                Get A Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PracticeAreasSection
