import { motion } from 'framer-motion'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      case: 'Immigration Law',
      text: 'Yu Law Firm helped me navigate the complex immigration process with such care and expertise. Liezyl was always available to answer my questions and made me feel confident throughout the entire journey.',
      rating: 5,
      location: 'San Francisco, CA'
    },
    {
      name: 'David Chen',
      case: 'Personal Injury',
      text: 'After my accident, I was overwhelmed and didn\'t know where to turn. Yu Law Firm fought tirelessly for me and secured a settlement that exceeded my expectations. I couldn\'t be more grateful.',
      rating: 5,
      location: 'Oakland, CA'
    },
    {
      name: 'Sarah Johnson',
      case: 'Family Law',
      text: 'Going through a divorce was the hardest time in my life, but Yu Law Firm provided the compassionate support I needed while aggressively protecting my interests. They truly care about their clients.',
      rating: 5,
      location: 'San Jose, CA'
    },
    {
      name: 'Michael Thompson',
      case: 'Immigration Law',
      text: 'The team at Yu Law Firm made my family\'s dream of becoming U.S. citizens a reality. Their attention to detail and dedication to our case was remarkable. Highly recommended!',
      rating: 5,
      location: 'Berkeley, CA'
    },
    {
      name: 'Lisa Wang',
      case: 'Personal Injury',
      text: 'Professional, knowledgeable, and genuinely caring - that\'s Yu Law Firm. They handled my case with such skill and kept me informed every step of the way. Excellent results!',
      rating: 5,
      location: 'Fremont, CA'
    },
    {
      name: 'Carlos Martinez',
      case: 'Family Law',
      text: 'Yu Law Firm helped me through a difficult custody battle with professionalism and empathy. They understood what was at stake and fought hard for my children. I can\'t thank them enough.',
      rating: 5,
      location: 'San Mateo, CA'
    }
  ]

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 bg-brand-black overflow-hidden relative">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-black to-gray-800"></div>
      {/* Central blue spotlight */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 opacity-[0.06] rounded-full blur-3xl"></div>
      {/* Left red spotlight */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-red opacity-[0.08] rounded-full blur-3xl"></div>
      {/* Right red spotlight */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-red opacity-[0.08] rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-lancea text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CLIENT TESTIMONIALS
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-lg font-acherus text-brand-cream max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Don't just take our word for it. Hear from our satisfied clients who have experienced 
            the Yu Law Firm difference in their legal matters.
          </motion.p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none"></div>
          
          {/* Marquee Animation */}
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -50 * testimonials.length + '%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-brand-red opacity-60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-brand-black font-acherus leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Client Info */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-lancea text-brand-black">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm font-acherus text-brand-gray">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-brand-red text-white text-xs font-acherus font-medium rounded-full">
                          {testimonial.case}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-2 border-brand-red opacity-20 rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-white">
            <div className="text-4xl font-lancea text-brand-red mb-2">500+</div>
            <div className="font-acherus text-brand-cream">Cases Won</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-lancea text-brand-red mb-2">98%</div>
            <div className="font-acherus text-brand-cream">Success Rate</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-lancea text-brand-red mb-2">15+</div>
            <div className="font-acherus text-brand-cream">Years Experience</div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg font-acherus text-brand-cream mb-6">
            Ready to become our next success story?
          </p>
          <motion.a
            href="/contact"
            className="bg-brand-red text-white px-8 py-4 font-acherus font-medium tracking-wide transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-brand-black"
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

export default TestimonialsSection
