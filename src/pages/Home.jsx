import { motion } from 'framer-motion'
import HeroSection from '../components/sections/HeroSection'
import StatisticsSection from '../components/sections/StatisticsSection'
import PurposeSection from '../components/sections/PurposeSection'
import PracticeAreasSection from '../components/sections/PracticeAreasSection'
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection'
import { StaggerTestimonials } from '../components/StaggerTestimonials'
import BrandStorySection from '../components/sections/BrandStorySection'
import CoreValuesSection from '../components/sections/CoreValuesSection'
import CTASection from '../components/sections/CTASection'
import SettlementsSection from '../components/sections/SettlementsSection'
import FAQSection from '../components/sections/FAQSection'

const Home = () => {

  return (
    <>
      <HeroSection />
      <StatisticsSection />
      <PurposeSection />
      <PracticeAreasSection />
      <SettlementsSection />
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-lancea text-brand-black mb-6"
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
              className="text-lg font-acherus text-brand-gray max-w-3xl mx-auto leading-relaxed"
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
          <StaggerTestimonials />
        </div>
      </section>
      {/* <BrandStorySection /> */}
      <WhyChooseUsSection />
      {/* <CoreValuesSection /> */}
      <CTASection />
      <FAQSection />
    </>
  )
}

export default Home
