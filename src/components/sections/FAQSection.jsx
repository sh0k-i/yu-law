import { motion } from 'framer-motion'
import { useState } from 'react'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  // Use dynamic translations with namespaces
  const faqs = [
    {
      question: 'How Does the "No Win No Fee" Promise Work?',
      answer: 'We work on a contingency fee basis, which means you don\'t pay attorney fees unless we win your case. We offer free initial consultations to evaluate your case and discuss your legal options without any upfront costs.'
    },
    {
      question: 'Do I Have to Pay to Speak with an Injury Attorney?',
      answer: 'No, we offer completely free consultations. There are no upfront costs or fees to discuss your case with our experienced legal team.'
    },
    {
      question: 'Do I Need a Personal Injury Attorney Help Me Settle My Case?',
      answer: 'While not required by law, having an experienced attorney significantly increases your chances of receiving fair compensation. Insurance companies often offer lower settlements to unrepresented individuals.'
    },
    {
      question: 'What is a Contingency Fee?',
      answer: 'A contingency fee means our payment is contingent on winning your case. You pay nothing upfront, and we only get paid when we secure compensation for you.'
    },
    {
      question: 'How Much Does it Cost to Hire a Personal Injury Attorney?',
      answer: 'There are no upfront costs. We work on contingency, meaning you only pay if we win your case. Our fee comes from the settlement or judgment we secure for you.'
    },
    {
      question: 'How Much Is My Personal Injury Case Worth?',
      answer: 'Case value depends on factors like medical expenses, lost wages, pain and suffering, and future costs. We provide free case evaluations to estimate your potential compensation.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-responsive">
        <div className="grid-responsive-2 items-start">
          {/* Left Column - Heading and Description */}
          <div className="lg:sticky lg:top-24">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lancea text-brand-black mb-6 sm:mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              YOUR QUESTIONS
              <br />
              <span className="text-brand-red">ANSWERED</span>
            </motion.h2>
            
            <motion.p 
              className="body-lg text-brand-gray mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get answers to common questions about our legal services, processes, and how we can help with your case.
            </motion.p>

            <motion.p 
              className="body-md text-brand-gray mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Following an accident, there are always more questions than answers. At Yu Law Firm, we're here to answer any questions you have about your injury case.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="btn-primary">
                  Contact 24-7
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 sm:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 group touch-target"
                >
                  <h3 className="text-base sm:text-lg font-acherus text-brand-black pr-4 group-hover:text-brand-red transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <svg 
                      className={`w-4 h-4 text-brand-red transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-45' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 sm:pb-6 pr-8 sm:pr-10">
                    <p className="body-md text-brand-gray">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
