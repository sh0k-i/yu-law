import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/sections/HeroSection'
import PurposeSection from '../components/sections/PurposeSection'
import PracticeAreasSection from '../components/sections/PracticeAreasSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import { StaggerTestimonials } from '../components/StaggerTestimonials'
import BrandStorySection from '../components/sections/BrandStorySection'
import CoreValuesSection from '../components/sections/CoreValuesSection'
import CTASection from '../components/sections/CTASection'
import SettlementsSection from '../components/sections/SettlementsSection'
import FAQSection from '../components/sections/FAQSection'
import PartnersSection from '../components/sections/PartnersSection'
import OurApproachSection from '../components/sections/OurApproachSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <SettlementsSection />
      
      <OurApproachSection />
      <PracticeAreasSection />

      <PartnersSection />
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
              CLIENT TESTIMONIALS
            </motion.h2>
            <motion.div 
              className="accent-line mx-auto mb-6 sm:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="body-lg text-brand-gray max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hear from our satisfied clients who have experienced the Yu Law Firm difference firsthand.
            </motion.p>
          </div>
        </div>
        {/* Full width testimonials */}
        <div className="w-full">
          <StaggerTestimonials/>
        </div>
        
        {/* View All Reviews Button */}
        <div className="container-responsive mt-8 sm:mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-brand-red font-acherus font-medium text-lg hover:text-brand-red/80 transition-colors duration-200 border-b-2 border-brand-red hover:border-brand-red/80 pb-1"
            >
              View All Reviews
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* <WhyChooseUsSection /> */}
      {/* <CoreValuesSection /> */}
      <CTASection />
      <FAQSection />
    </>
  )
}

export default Home
