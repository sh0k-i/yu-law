import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      title: 'Personal Injury',
      description: 'Fighting for the compensation you deserve after suffering injuries due to others\' negligence or wrongdoing.',
      detailedDescription: 'Our personal injury attorneys handle car accidents, medical malpractice, workplace injuries, and wrongful death claims with dedication.',
      image: '/images/practice-areas/personal-injury.jpg',
      services: ['Car Accidents', 'Medical Malpractice', 'Workplace Injuries', 'Wrongful Death']
    },
    {
      title: 'Family Law',
      description: 'Navigating complex family matters with compassion and expertise. We understand that family issues are deeply personal and require sensitive handling.',
      detailedDescription: 'Our family law practice covers divorce, child custody, adoption, domestic violence protection, and property division with empathy and professionalism.',
      image: '/images/practice-areas/family-law.jpg',
      services: ['Divorce & Separation', 'Child Custody', 'Adoption', 'Domestic Violence Protection']
    },
    {
      title: 'Estate Planning',
      description: 'Securing your family\'s future with comprehensive estate planning solutions tailored to your unique needs.',
      detailedDescription: 'We provide expert guidance on wills, trusts, powers of attorney, and healthcare directives to protect your legacy and loved ones.',
      image: '/images/practice-areas/estate-planning.jpg',
      services: ['Wills & Trusts', 'Power of Attorney', 'Healthcare Directives', 'Estate Administration']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const cardVariants = {
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

  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-lancea text-brand-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            PRACTICE AREAS
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
            We specialize in three key areas of law, providing expert guidance and compassionate support. 
            Our experienced attorneys are dedicated to achieving the best possible outcomes for our clients.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <motion.div
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg h-full flex flex-col"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(171, 21, 34, 0.25)"
                }}
                transition={{ 
                  duration: 0.2,
                  ease: "easeOut"
                }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {/* Placeholder for actual photo */}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-brand-gray to-brand-black flex items-center justify-center relative"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(171,21,34,0.3)), url(${area.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60"></div>
                    
                    {/* Placeholder text until real photos are added */}
                    <div className="relative z-10 text-white text-center">
                      <div className="text-4xl font-lancea mb-2 opacity-80">
                        {area.title}
                      </div>
                      <div className="text-sm font-acherus opacity-60">
                        Professional Photo Coming Soon
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-brand-red bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                    >
                      <motion.div
                        className="text-white text-center"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-lg font-acherus font-medium mb-2">
                          Explore Services
                        </div>
                        <div className="w-12 h-0.5 bg-white mx-auto"></div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Practice Area Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    {index === 0 && (
                      // Family Law - Heart/Family icon
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )}
                    {index === 1 && (
                      // Immigration Law - Globe icon
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {index === 2 && (
                      // Personal Injury - Shield/Protection icon
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-lancea text-brand-black mb-4 group-hover:text-brand-red transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-brand-gray font-acherus leading-relaxed mb-8">
                    {area.description}
                  </p>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/services"
                      className="inline-flex items-center text-brand-red font-acherus font-medium hover:text-brand-black transition-colors duration-200 group"
                    >
                      <span>Learn More About {area.title}</span>
                      <motion.span
                        className="ml-2 group-hover:ml-3 transition-all duration-200"
                        whileHover={{ x: 3 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-brand-red"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg font-acherus text-brand-gray mb-6">
            Need legal assistance in any of these areas?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Get Started Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PracticeAreasSection
