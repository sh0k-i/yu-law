import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import Map from '../components/Map'

const Contact = () => {
  const [selectedLocation, setSelectedLocation] = useState('carrollton')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const locations = {
    carrollton: {
      name: 'Carrollton',
      latitude: 32.967371,
      longitude: -96.8408679,
      address: '2201 Midway Road, Suite 102<br/>Carrollton, Texas 75006',
      phone: '(940) 239-9840',
      email: 'info@yulawfirm.com'
    },
    austin: {
      name: 'Austin',
      latitude: 30.34148,
      longitude: -97.754922,
      address: '5900 Balcones Drive # 12813<br/>Austin, TX 78731',
      phone: '(940) 239-9840',
      email: 'info@yulawfirm.com'
    }
  }

  const currentLocation = locations[selectedLocation]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_email: 'leila@attorneyyu.com'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for contacting us! We will get back to you soon.'
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try calling us directly at (940) 239-9840.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              CONTACT US
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
              Ready to take the next step? Contact Yu Law Firm today for your free consultation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="grid-responsive-2">
            {/* Contact Form */}
            <div>
              <motion.h2 
                className="heading-lg text-brand-black mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Get Your Free Consultation
              </motion.h2>
              <motion.div 
                className="accent-line mb-6 sm:mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
              <p className="body-lg text-brand-gray mb-6 sm:mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss your case.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-acherus font-medium text-brand-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent font-acherus text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-acherus font-medium text-brand-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent font-acherus text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-acherus font-medium text-brand-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent font-acherus text-sm sm:text-base"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-acherus font-medium text-brand-black mb-2">
                    Tell us about your case *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent font-acherus text-sm sm:text-base"
                    placeholder="Please provide details about your legal situation..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Message */}
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 mt-4 font-acherus text-sm ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <motion.h2 
                className="heading-lg text-brand-black mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Get In Touch
              </motion.h2>
              <motion.div 
                className="accent-line mb-6 sm:mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start">
                  <div className="text-brand-red w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-sm text-brand-black mb-1 sm:mb-2">Phone</h3>
                    <p className="body-md text-brand-gray mb-1 sm:mb-2">Call us for immediate assistance</p>
                    <a 
                      href="tel:940-239-9840" 
                      className="text-brand-red font-acherus font-medium hover:text-brand-black transition-colors"
                    >
                      (940) 239-9840
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-brand-red w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-sm text-brand-black mb-1 sm:mb-2">Email</h3>
                    <p className="body-md text-brand-gray mb-1 sm:mb-2">Send us an email anytime</p>
                    <a 
                      href="mailto:info@yulawfirm.com" 
                      className="text-brand-red font-acherus font-medium hover:text-brand-black transition-colors"
                    >
                      info@yulawfirm.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-brand-red w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-sm text-brand-black mb-1 sm:mb-2">Locations</h3>
                    <p className="body-md text-brand-gray mb-2 sm:mb-3">Serving clients throughout Texas</p>
                    <div className="space-y-3">
                      <div>
                        <p className="body-md text-brand-black font-medium mb-1">Carrollton Office</p>
                        <p className="body-md text-brand-gray text-sm">
                          2201 Midway Road, Suite 102,<br />
                          Carrollton, Texas 75006
                        </p>
                      </div>
                      <div>
                        <p className="body-md text-brand-black font-medium mb-1">Austin Office</p>
                        <p className="body-md text-brand-gray text-sm">
                          5900 Balcones Drive # 12813<br />
                          Austin, TX 78731
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-brand-red w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                      <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="heading-sm text-brand-black mb-1 sm:mb-2">Office Hours</h3>
                    <p className="body-md text-brand-gray">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="section-padding bg-brand-cream">
        <div className="container-responsive">
          <div className="text-center">
            <motion.h2 
              className="heading-lg text-brand-black mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Visit Our Office
            </motion.h2>
            <motion.div 
              className="accent-line mx-auto mb-6 sm:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            
            {/* Location Toggle */}
            <motion.div 
              className="flex justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => setSelectedLocation('carrollton')}
                className={`px-6 py-3 font-acherus font-medium text-base transition-all duration-300 ${
                  selectedLocation === 'carrollton'
                    ? 'bg-brand-red text-white shadow-lg'
                    : 'bg-white text-brand-black border-2 border-gray-200 hover:border-brand-red'
                }`}
              >
                Carrollton Office
              </button>
              <button
                onClick={() => setSelectedLocation('austin')}
                className={`px-6 py-3 font-acherus font-medium text-base transition-all duration-300 ${
                  selectedLocation === 'austin'
                    ? 'bg-brand-red text-white shadow-lg'
                    : 'bg-white text-brand-black border-2 border-gray-200 hover:border-brand-red'
                }`}
              >
                Austin Office
              </button>
            </motion.div>
            
            <Map 
              latitude={currentLocation.latitude} 
              longitude={currentLocation.longitude} 
              zoom={15}
              address={currentLocation.address}
              city={currentLocation.name}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
