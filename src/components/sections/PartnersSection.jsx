import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Marquee from 'react-fast-marquee'

const PartnersSection = () => {
  const { t } = useTranslation()

  // Partner logos with working placeholder images
  const partnerLogos = [
    {
      name: 'Microsoft',
      logo: '/images/micro.png', 
    },
    {
      name: 'Google', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/150px-Google_2015_logo.svg.png',
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/150px-Amazon_logo.svg.png',
    },
    {
      name: 'Netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/150px-Netflix_2015_logo.svg.png',
    },
    {
      name: 'Tesla',
      logo: '/images/tesla.png',
    },
    {
      name: 'Meta',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/150px-Meta_Platforms_Inc._logo.svg.png',
    },
    {
      name: 'Adobe',
      logo: '/images/adobe.png',
    },
    {
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/80px-Apple_logo_black.svg.png',
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
            {t('partners.title', 'Trusted by Leading Organizations')}
          </h2>
          <div className="accent-line bg-white mx-auto mb-4 sm:mb-6"></div>
          <p className="body-md text-white/90 max-w-2xl mx-auto px-4">
            {t('partners.description', 'We are proud to partner with industry-leading organizations in our commitment to excellence and justice.')}
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
                className="mx-4 sm:mx-6 md:mx-8 flex items-center justify-center h-16 sm:h-20 w-32 sm:w-40 relative group"
              >
                {/* White/Cream Overlay Layer for Uniform Look */}
                <div className="absolute inset-0 backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Partner Logo */}
                <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
                  <img 
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      mixBlendMode: 'normal',
                      filter: 'brightness(0) invert(1) opacity(0.9)'
                    }}
                  />
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
