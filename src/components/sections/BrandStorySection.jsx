import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const BrandStorySection = () => {
  return (
    <section className="py-20 bg-brand-black text-white relative overflow-hidden">
      {/* Background matching Settlements By Yu section */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-black to-gray-800"></div>
      {/* Central blue spotlight */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 opacity-[0.04] rounded-full blur-3xl"></div>
      {/* Left red spotlight */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-brand-red opacity-[0.06] rounded-full blur-3xl"></div>
      {/* Right red spotlight */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-red opacity-[0.06] rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              className="text-4xl md:text-5xl font-lancea text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              OUR STORY
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-brand-red mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-lg font-acherus text-brand-cream leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At the heart of Yu Law Firm lies a narrative of empathy and empowerment. Inspired by a personal
              journey through the challenges of immigration and family law, our founder, Liezyl, transforms her
              experiences into a driving force.
            </motion.p>
            <motion.p 
              className="text-lg font-acherus text-brand-cream leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Witnessing her mother's journey as an immigrant, she vowed to become a beacon of hope for those 
              facing legal uncertainties, embracing the ethos that knowledge is power. Yu Law Firm is more than 
              a legal practice; it's a testament to resilience, a bridge connecting individuals to new beginnings, 
              and an unwavering commitment to caring beyond the courtroom.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/about"
                className="btn-primary"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="flex justify-end items-end h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Founder Portrait */}
            <motion.img
              src="/images/portrait.png"
              alt="Founder Portrait"
              className="w-72 h-auto object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection
