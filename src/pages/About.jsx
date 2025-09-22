import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import OurTeamSection from '../components/sections/OurTeamSection'

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-black text-white pt-32 pb-24 -mt-20 relative overflow-hidden">
        {/* Beautiful Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-black to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/20"></div>
        
        {/* Subtle accent gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-red/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-lancea text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ABOUT YU LAW FIRM
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
              Where compassionate advocacy meets confident expertise, ensuring our clients feel empowered every step of the way.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.h2 
                className="text-4xl font-lancea text-brand-black mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                OUR MISSION
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-brand-red mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
              <p className="text-lg font-acherus text-brand-black leading-relaxed">
                Empowering lives through compassionate legal advocacy, Yu Law Firm is dedicated to defending
                our clients' rights, providing unwavering support, and navigating legal complexities with integrity,
                commitment, and a commitment to fostering hope and new opportunities for individuals and
                families across Texas.
              </p>
            </div>
            <div>
              <motion.h2 
                className="text-4xl font-lancea text-brand-black mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                OUR VISION
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-brand-red mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
              <p className="text-lg font-acherus text-brand-black leading-relaxed">
                We strive to build trust, clientele, and lasting relationships, helping clients initiate new chapters in
                their lives. We envision Yu Law Firm as a center of legal excellence, with a dedicated team
                mentoring others and actively contributing to the community. We aim to be more than legal
                practitioners; we aspire to be architects of positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <OurTeamSection />

      {/* Brand Positioning */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-lancea text-brand-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            AN ATTORNEY WHO CARES
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-brand-red mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="text-lg font-acherus text-brand-black leading-relaxed mb-8">
            Yu Law Firm stands at the intersection of expertise and empathy. Our commitment to open communication 
            ensures that clients are not left in the dark about their cases. We are a beacon of strength, offering 
            unwavering support, and a trusted partner in navigating legal complexities.
          </p>
          <Link
            to="/contact"
            className="btn-primary"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
