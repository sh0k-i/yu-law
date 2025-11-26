import { motion } from 'framer-motion'

const PurposeSection = () => {
  return (
    <section className="py-12 bg-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-lancea text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            OUR PURPOSE
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-white mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-acherus text-white leading-relaxed text-center">
            Specializing in Personal Injury, Family Law, and Estate Planning, our law firm is dedicated to serving as an unwavering support system. We provide steadfast legal guidance for individuals navigating the nuanced domains of these areas, positioning ourselves as your dedicated ally. Our commitment assures you that no challenge is deemed insurmountable with our support. Your peace of mind is our utmost priority, and we stand ready to simplify intricate legal matters, standing firmly by your side through every phase of your journey.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PurposeSection
