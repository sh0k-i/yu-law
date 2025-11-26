import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const PartnersSection = () => {

  // Partner logos with working placeholder images
  const partnerLogos = [
    {
      name: 'Texas Trial Lawyers Association',
      logo: '/images/ttla.png',
      whiteOverlay: false
    },
    {
      name: 'Philippine American Chamber of Commerce', 
      logo: '/images/pacc.png',
      whiteOverlay: false
    },
    {
      name: 'Pilipino American Community Endeavor',
      logo: '/images/pace.png',
      whiteOverlay: true
    },
    {
      name: 'Dallas Bar Association',
      logo: '/images/dba.png',
      whiteOverlay: true
    },
  ]

  return (
    <section className="relative bg-brand-red section-padding-sm overflow-hidden">
      {/* Background Pattern */}
      
      <div className="relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-md text-white mb-3 sm:mb-4 px-4">
            Trusted by Leading Organizations
          </h2>
          <div className="accent-line bg-white mx-auto mb-4 sm:mb-6"></div>
          <p className="body-md text-white/90 max-w-2xl mx-auto px-4">
            We are proud to partner with industry-leading organizations in our commitment to excellence and justice.
          </p>
        </motion.div>

        {/* Animated Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Marquee 
            gradient={false}
            speed={50}
            pauseOnHover={true}
          >
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="mx-4 sm:mx-6 md:mx-8 flex items-center gap-4 group"
              >
                {/* Partner Logo */}
                <div className="flex items-center justify-center h-16 sm:h-20 relative">
                  <img 
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`h-full w-auto object-contain group-hover:scale-110 transition-all duration-300 ${
                      partner.whiteOverlay ? 'filter brightness-0 invert opacity-90 group-hover:opacity-100' : ''
                    }`}
                  />
                </div>
                
                {/* Organization Name */}
                <div className="text-white font-acherus text-sm sm:text-base font-medium whitespace-nowrap">
                  {partner.name}
                </div>
              </div>
            ))}
          </Marquee>

        </motion.div>

      </div>
    </section>
  )
}

export default PartnersSection
