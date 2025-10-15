import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()
  // Only offering Personal Injury services
  const services = [
    {
      title: 'Personal Injury',
      description: 'Fighting for the compensation you deserve after suffering injuries due to others\'s negligence. We are dedicated to securing justice and fair compensation for our clients. Our specialized team focuses exclusively on personal injury cases to provide you with the highest level of expertise and results.',
      services: [
        'Car Accident Claims',
        'Slip and Fall Cases',
        'Medical Malpractice',
        'Workplace Injuries',
        'Product Liability',
        'Wrongful Death Claims',
        'Motorcycle Accidents',
        'Pedestrian Accidents',
        'Truck Accidents',
        'Brain & Spinal Injuries'
      ],
      image: '/images/services/personal-injury-service.jpg',
      highlight: 'Aggressive advocacy to secure the compensation you rightfully deserve.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-black text-white pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 -mt-20 relative overflow-hidden">
        {/* Beautiful Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-black to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/20"></div>
        
        {/* Subtle accent gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-red/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center">
            <motion.h1 
              className="heading-xl text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {t('services.title', 'OUR SERVICES')}
            </motion.h1>
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
              {t('services.description', 'Expert legal services in Personal Injury with unwavering dedication to your success and recovery. We focus exclusively on getting you the compensation you deserve.')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className={`grid-responsive-2 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Content Side */}
                <motion.div 
                  className={index % 2 === 1 ? 'lg:col-start-2' : ''}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="mb-4 sm:mb-6">
                    <span className="inline-block px-3 sm:px-4 py-2 bg-brand-red text-white text-xs sm:text-sm font-acherus font-medium mb-3 sm:mb-4">
                      {t('services.practiceAreaLabel', 'PRACTICE AREA')}
                    </span>
                    <h2 className="heading-lg text-brand-black mb-3 sm:mb-4">{service.title}</h2>
                    <div className="accent-line mb-4 sm:mb-6"></div>
                  </div>
                  
                  <div className="mb-6 sm:mb-8">
                    <p className="body-lg text-brand-gray mb-4 sm:mb-6">
                      {service.description}
                    </p>
                    <div className="bg-brand-cream card-padding border-l-4 border-brand-red">
                      <p className="body-lg text-brand-black italic">
                        "{service.highlight}"
                      </p>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="btn-primary inline-block"
                    >
                      {t('header.getStarted')}
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Image and Services Side */}
                <motion.div 
                  className={index % 2 === 1 ? 'lg:col-start-1' : ''}
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {/* Photo Container */}
                  <div className="relative mb-6 sm:mb-8 group">
                    <div className="relative h-64 sm:h-80 overflow-hidden">
                      {/* Placeholder for actual photo */}
                      <div 
                        className="w-full h-full bg-gradient-to-br from-brand-gray to-brand-black flex items-center justify-center relative"
                        style={{
                          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6), rgba(171,21,34,0.4)), url(${service.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-40"></div>
                        
                        {/* Placeholder text until real photos are added */}
                        <div className="relative z-10 text-white text-center px-4">
                          <div className="text-2xl sm:text-3xl font-lancea mb-2 opacity-80">
                            {service.title}
                          </div>
                          <div className="text-xs sm:text-sm font-acherus opacity-60">
                            Professional Photo Coming Soon
                          </div>
                        </div>

                        {/* Hover overlay */}
                        <motion.div
                          className="absolute inset-0 bg-brand-red bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                        ></motion.div>
                      </div>

                      {/* Decorative corner elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-brand-red opacity-60 rotate-45"></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-brand-cream opacity-40 rotate-12"></div>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="bg-white card-padding shadow-lg border border-gray-100">
                    <h3 className="heading-sm text-brand-black mb-4 sm:mb-6 flex items-center">
                      <span className="w-2 h-2 bg-brand-red mr-3"></span>
                      {t('services.servicesInclude', 'Services Include:')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.services.map((item, itemIndex) => (
                        <motion.div 
                          key={itemIndex} 
                          className="flex items-center group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-brand-red mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                          <span className="font-acherus text-brand-black group-hover:text-brand-red transition-colors duration-200">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-white mb-4 sm:mb-6">
            {t('services.ctaTitle', 'Ready to Discuss Your Case?')}
          </h2>
          <p className="body-lg text-white mb-6 sm:mb-8">
            {t('services.ctaDescription', 'Every legal challenge is unique. Let us provide you with a personalized consultation to discuss your specific needs and how we can help.')}
          </p>
          <div className="flex-responsive justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-red px-6 sm:px-8 py-3 sm:py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red btn-mobile"
            >
              {t('header.getStarted')}
            </Link>
            <a
              href="tel:940-239-9840"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red btn-mobile"
            >
              {t('services.callNow', 'Call: 940-239-9840')}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
