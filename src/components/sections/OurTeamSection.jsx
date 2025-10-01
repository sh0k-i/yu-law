import { motion } from 'framer-motion'

const OurTeamSection = () => {
  const teamMembers = [
    {
      name: 'Liezyl Yu Masinag',
      title: 'Owner | Attorney',
      description: 'Leading Yu Law Firm with expertise in personal injury law and unwavering dedication to client advocacy. Committed to fighting for justice and maximum compensation for every client.',
      image: '/images/team/liezyl.png'
    },
    {
      name: 'Carla Cano Cantu',
      title: 'Case Manager',
      description: 'Expert case management professional ensuring smooth client communication and efficient case progression. Dedicated to keeping clients informed throughout their legal journey.',
      image: '/images/team/carla.png'
    },
    {
      name: 'Kaye Brier',
      title: 'Paralegal',
      description: 'Skilled paralegal providing comprehensive legal support and document preparation. Committed to thorough case preparation and exceptional client service.',
      image: '/images/team/kaye.png'
    },
    {
      name: 'Caren Marie Montelibano',
      title: 'Discovery Clerk',
      description: 'Detail-oriented discovery specialist managing case documentation and evidence organization. Ensuring comprehensive case preparation for optimal outcomes.',
      image: '/images/team/caren.png'
    },
    {
      name: 'Arian Loyd Yu Hinayon',
      title: 'Intake Specialist',
      description: 'Compassionate intake specialist providing the first point of contact for potential clients. Dedicated to understanding client needs and connecting them with appropriate legal resources.',
      image: '/images/team/arian.png'
    },
    {
      name: 'Leila Trono',
      title: 'Medical Clerk',
      description: 'Specialized medical records coordinator managing complex medical documentation for personal injury cases. Expert in organizing critical medical evidence.',
      image: '/images/team/leila.png'
    },
    {
      name: 'Tanya Almendarez',
      title: 'Compliance Officer',
      description: 'Ensuring all legal processes meet regulatory standards and ethical requirements. Committed to maintaining the highest standards of legal practice.',
      image: null
    },
    {
      name: 'Marilyn Sario',
      title: 'Closing Coordinator',
      description: 'Expert coordinator managing case closures and final settlements. Ensuring smooth completion of legal matters and client satisfaction.',
      image: null
    },
    {
      name: 'Bear',
      title: 'Barketing Manager',
      description: 'Our beloved office companion providing emotional support and stress relief for both clients and staff. Specializing in tail wags and unconditional loyalty.',
      image: null
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              <div className="bg-white shadow-lg overflow-hidden hover:shadow-[0_25px_50px_-12px_rgba(171,21,34,0.25)] transition-all duration-300 group-hover:-translate-y-2">
                {/* Photo Container with Dark Background */}
                <div className="relative bg-gradient-to-br from-gray-800 via-brand-black to-gray-900 h-80 flex justify-center items-end overflow-hidden">
                  {/* Floating Photo */}
                  {member.image ? (
                    <motion.div 
                      className="relative"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="h-72 w-auto object-contain object-bottom filter drop-shadow-2xl transition-all duration-300 ease-out group-hover:scale-110 translate-y-1"
                        // change the drop shadow to white/70
                        style={{
                          filter: 'drop-shadow(0 10px 25px rgba(255,255,255,0.1))'
                        }}
                      />
                      
                      {/* Subtle glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl"
                        style={{ transform: 'scale(1.2)' }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="w-32 h-32 bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center text-white text-4xl font-lancea mb-8 shadow-2xl"
                      whileHover={{ 
                        y: -10, 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      {member.name === 'Bear' ? '🐕' : member.name.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-lancea text-brand-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-red font-acherus font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-brand-gray font-acherus leading-relaxed text-sm">
                    {member.description}
                  </p>

                  {/* Decorative accent */}
                  <motion.div
                    className="w-12 h-0.5 bg-brand-red mt-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  />
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
