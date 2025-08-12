import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Component as EtherealShadows } from '../components/EtherealShadows'

const Services = () => {
  const services = [
    {
      title: 'Personal Injury',
      description: 'Fighting for the compensation you deserve after suffering injuries due to others\' negligence. We are dedicated to securing justice and fair compensation for our clients.',
      services: [
        'Car Accident Claims',
        'Slip and Fall Cases',
        'Medical Malpractice',
        'Workplace Injuries',
        'Product Liability',
        'Wrongful Death Claims'
      ],
      image: '/images/services/personal-injury-service.jpg',
      highlight: 'Aggressive advocacy to secure the compensation you rightfully deserve.'
    },
    {
      title: 'Family Law',
      description: 'Navigating the complexities of family relationships with compassion and expertise. We understand that family matters are deeply personal and require sensitive, professional handling.',
      services: [
        'Divorce and Separation',
        'Child Custody and Support',
        'Adoption Proceedings',
        'Domestic Violence Protection',
        'Property Division',
        'Prenuptial Agreements'
      ],
      image: '/images/services/family-law-service.jpg',
      highlight: 'Compassionate guidance through life\'s most challenging family transitions.'
    },
    {
      title: 'Estate Planning',
      description: 'Securing your family\'s future with comprehensive estate planning solutions tailored to your unique needs and goals.',
      services: [
        'Wills and Trusts',
        'Power of Attorney',
        'Healthcare Directives',
        'Estate Administration',
        'Asset Protection',
        'Probate Services'
      ],
      image: '/images/services/estate-planning-service.jpg',
      highlight: 'Protecting your legacy and ensuring your wishes are honored.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-black text-white pt-32 pb-24 -mt-20 relative overflow-hidden">
        {/* Dynamic Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-black to-gray-800"></div>
        {/* Central blue spotlight */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 opacity-[0.06] rounded-full blur-3xl"></div>
        {/* Left red spotlight */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-red opacity-[0.08] rounded-full blur-3xl"></div>
        {/* Right red spotlight */}
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-red opacity-[0.08] rounded-full blur-3xl"></div>
        
        {/* Ethereal Shadows Overlay */}
        <div className="absolute inset-0 z-5">
          <EtherealShadows
            color="rgba(128, 128, 128, 1)"
            animation={{ scale: 100, speed: 90 }}
            noise={{ opacity: 1, scale: 1.2 }}
            sizing="fill"
            className="w-full h-full"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-lancea text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              OUR SERVICES
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-brand-red mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-xl font-acherus text-brand-cream max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Expert legal services in Personal Injury, Family Law, and Estate Planning with unwavering dedication to your success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
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
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-brand-red text-white text-sm font-acherus font-medium rounded-full mb-4">
                      PRACTICE AREA
                    </span>
                    <h2 className="text-4xl md:text-5xl font-lancea text-brand-black mb-4">{service.title}</h2>
                    <div className="w-24 h-1 bg-brand-red mb-6"></div>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-lg font-acherus text-brand-gray leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="bg-brand-cream p-6 rounded-md border-l-4 border-brand-red">
                      <p className="font-acherus text-brand-black italic text-lg">
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
                      Get Started Now
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
                  <div className="relative mb-8 group">
                    <div className="relative h-80 rounded-2xl overflow-hidden">
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
                        <div className="relative z-10 text-white text-center">
                          <div className="text-3xl font-lancea mb-2 opacity-80">
                            {service.title}
                          </div>
                          <div className="text-sm font-acherus opacity-60">
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
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-lancea text-brand-black mb-6 flex items-center">
                      <span className="w-2 h-2 bg-brand-red rounded-full mr-3"></span>
                      Services Include:
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
                          <div className="w-2 h-2 bg-brand-red rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
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
      <section className="py-20 bg-brand-red text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-lancea text-white mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl font-acherus text-white mb-8 leading-relaxed">
            Every legal challenge is unique. Let us provide you with a personalized consultation to discuss your specific needs and how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-red px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red"
            >
              Get Started Now
            </Link>
            <a
              href="tel:940-239-9837"
              className="border-2 border-white text-white px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red"
            >
              Call: 940-239-9837
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
