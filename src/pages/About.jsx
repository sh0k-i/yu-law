import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import OurTeamSection from '../components/sections/OurTeamSection'

const About = () => {
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
              ABOUT YU LAW FIRM
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
              Where compassionate advocacy meets confident expertise, ensuring our clients feel empowered every step of the way.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="grid-responsive-2">
            <div>
              <motion.h2 
                className="heading-lg text-brand-black mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                OUR MISSION
              </motion.h2>
              <motion.div 
                className="accent-line mb-6 sm:mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
              <p className="body-lg text-brand-black">
                Empowering lives through compassionate legal advocacy, Yu Law Firm is dedicated to defending
                our clients' rights, providing unwavering support, and navigating legal complexities with integrity,
                commitment, and a commitment to fostering hope and new opportunities for individuals and
                families across Texas.
              </p>
            </div>
            <div>
              <motion.h2 
                className="heading-lg text-brand-black mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                OUR VISION
              </motion.h2>
              <motion.div 
                className="accent-line mb-6 sm:mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
              <p className="body-lg text-brand-black">
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
      <section className="section-padding bg-brand-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="heading-lg text-brand-black mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            AN ATTORNEY WHO CARES
          </motion.h2>
          <motion.div 
            className="accent-line mx-auto mb-6 sm:mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <p className="body-lg text-brand-black mb-6 sm:mb-8">
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
