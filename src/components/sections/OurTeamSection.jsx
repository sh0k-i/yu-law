import { motion } from 'framer-motion'

const OurTeamSection = () => {
  const teamMembers = [
    {
      name: 'Liezyl Yu',
      title: 'Founding Attorney',
      specialization: 'Family Law, Immigration, Personal Injury',
      description: 'With years of experience in family law and immigration, Liezyl founded Yu Law Firm with a mission to provide compassionate legal advocacy to those who need it most.',
      image: '/images/team/liezyl-yu.png' // Placeholder path
    },
    {
      name: 'Sarah Martinez',
      title: 'Senior Associate',
      specialization: 'Immigration Law',
      description: 'Sarah brings extensive experience in immigration law, helping families navigate complex visa processes and citizenship applications with dedication and expertise.',
      image: '/images/team/sarah-martinez.png' // Placeholder path
    },
    {
      name: 'Michael Chen',
      title: 'Personal Injury Attorney',
      specialization: 'Personal Injury, Medical Malpractice',
      description: 'Michael specializes in personal injury cases, fighting tirelessly to ensure clients receive the compensation they deserve for their injuries and suffering.',
      image: '/images/team/michael-chen.png' // Placeholder path
    },
    {
      name: 'Jessica Rodriguez',
      title: 'Family Law Attorney',
      specialization: 'Family Law, Child Custody',
      description: 'Jessica focuses on family law matters, providing compassionate guidance through divorce, custody, and adoption proceedings with sensitivity and professionalism.',
      image: '/images/team/jessica-rodriguez.png' // Placeholder path
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-lancea text-brand-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR TEAM
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
            Meet the dedicated legal professionals who make up Yu Law Firm. Our experienced team is committed 
            to providing exceptional legal representation with compassion, integrity, and unwavering dedication 
            to our clients' success.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-brand-cream rounded-md overflow-hidden card-hover hover:shadow-[0_25px_50px_-12px_rgba(171,21,34,0.25)] transition-shadow duration-300">
                {/* Photo Container with Black Background */}
                <div className="relative bg-brand-black p-8 flex justify-center items-center h-80">
                  <motion.div
                    className="relative w-48 h-48 rounded-full overflow-hidden bg-brand-black border-4 border-brand-cream"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: 2,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    {/* Placeholder for actual photo */}
                    <div className="w-full h-full bg-gradient-to-br from-brand-gray to-brand-black flex items-center justify-center">
                      <div className="text-white text-6xl font-lancea opacity-30">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-brand-red bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="text-white text-sm font-acherus font-medium">
                        View Profile
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-brand-red opacity-20 rotate-45"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-brand-cream opacity-30 rotate-12"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-lancea text-brand-black mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-red font-acherus font-medium mb-2">
                    {member.title}
                  </p>
                  <p className="text-sm font-acherus text-brand-gray mb-4 italic">
                    {member.specialization}
                  </p>
                  <p className="text-brand-black font-acherus leading-relaxed">
                    {member.description}
                  </p>

                  {/* Contact Button */}
                  <div className="mt-6">
                    <motion.button
                      className="text-brand-red font-acherus font-medium hover:text-brand-black transition-colors duration-200 flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Contact {member.name.split(' ')[0]}
                      <motion.span
                        className="ml-2 group-hover:ml-3 transition-all duration-200"
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg font-acherus text-brand-gray mb-6">
            Ready to work with our experienced legal team?
          </p>
          <motion.a
            href="/contact"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default OurTeamSection
