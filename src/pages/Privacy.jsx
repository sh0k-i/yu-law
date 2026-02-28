import { motion } from 'framer-motion'

const Privacy = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-black text-white pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 -mt-20 relative overflow-hidden">
        {/* Beautiful Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-brand-black to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-brand-black/20"></div>
        
        {/* Subtle accent gradients */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-red/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-blue-900/10 to-transparent"></div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center">
            <motion.h1 
              className="heading-xl text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              PRIVACY POLICY
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
              Your privacy and security are our top priorities at Yu Law Firm.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            {/* Committed to Protecting Your Privacy */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md text-brand-black mb-6">
                Committed to Protecting Your Privacy
              </h2>
              <div className="accent-line mb-6"></div>
              <div className="space-y-4 body-md text-brand-gray">
                <p>
                  At Yu Law Firm, safeguarding your privacy is our priority. We handle all the information you provide through our website with the utmost respect and care.
                </p>
                <p>
                  We diligently implement administrative and technical measures to prevent unauthorized or unlawful use of your personally identifiable information, as well as to safeguard against any accidental loss, destruction, or damage.
                </p>
                <p>
                  We uphold a strict policy of not selling or disclosing personally identifiable information about you to any unaffiliated third parties unless required by this Privacy Policy.
                </p>
              </div>
            </motion.div>

            {/* Information Collection */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="heading-md text-brand-black mb-6">
                Information Collection
              </h2>
              <div className="accent-line mb-6"></div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="heading-sm text-brand-black mb-4">Collection of Data:</h3>
                  <p className="body-md text-brand-gray">
                    Our website collects certain information about visitors, even if they are not logged in. This may include recording IP addresses, URLs of visited websites and pages, visit times and dates, and details about the hardware and software used. We may also utilize cookies to enhance your browsing experience and collect additional information about you. You have the option to adjust your browser settings to prevent cookies from being placed, although this may affect website functionality and personalization.
                  </p>
                </div>

                <div>
                  <h3 className="heading-sm text-brand-black mb-4">Providing Additional Information:</h3>
                  <p className="body-md text-brand-gray">
                    On occasion, we may request additional information about yourself, such as your name, contact details, and organizational affiliation, which we may use to better identify you. Choosing not to provide such information may restrict access to certain website features, content, or services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Use of Information */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-md text-brand-black mb-6">
                Use of Information
              </h2>
              <div className="accent-line mb-6"></div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="heading-sm text-brand-black mb-4">Improving User Experience:</h3>
                  <p className="body-md text-brand-gray">
                    We utilize the collected information to enhance your browsing experience by personalizing our website to align with your interests. Additionally, we use this data to curate content and services that you may find relevant and valuable, either individually or in conjunction with information from other users.
                  </p>
                </div>

                <div>
                  <h3 className="heading-sm text-brand-black mb-4">Communication and Updates:</h3>
                  <p className="body-md text-brand-gray">
                    Your provided information may also be used to keep you informed about relevant events, selected products, and services. While we may occasionally contact you with information from carefully selected third parties, we do not share your information for such purposes without your consent. Any sharing of your information with third parties would occur only through a process initiated by you.
                  </p>
                </div>

                <div>
                  <h3 className="heading-sm text-brand-black mb-4">Legal Disclosures:</h3>
                  <p className="body-md text-brand-gray">
                    We reserve the right to disclose any information obtained through our website to appropriate governmental or regulatory authorities if required by law or any governmental agency.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SMS Consent */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="heading-md text-brand-black mb-6">
                SMS Consent
              </h2>
              <div className="accent-line mb-6"></div>
              <p className="body-md text-brand-gray">
                We would like to assure you that we highly value your privacy when it comes to SMS communication. Any consent you provide for receiving SMS notifications, reminders, or updates is solely used for communicating important information related to our services. Rest assured that we do not share your phone numbers or SMS consent with any third parties.
              </p>
            </motion.div>

            {/* Analytics and Tracking */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <h2 className="heading-md text-brand-black mb-6">
                Analytics and Tracking
              </h2>
              <div className="accent-line mb-6"></div>
              <div className="space-y-4 body-md text-brand-gray">
                <p>
                  We use analytics tools to understand how visitors use our website and to improve our services. This includes collecting information about pages visited, time spent on site, browser type, device information, and general usage patterns.
                </p>
                <p>
                  The analytics data we collect is anonymized and aggregated, and is used solely for improving our website experience and understanding how we can better serve our clients. We do not sell or share this data with third parties for marketing purposes.
                </p>
                <p>
                  You have control over analytics tracking. You can opt-out at any time by adjusting your cookie preferences or by enabling "Do Not Track" in your browser settings. Your choice will be respected and saved on your device.
                </p>
              </div>
            </motion.div>

            {/* Information Transfers */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="heading-md text-brand-black mb-6">
                Information Transfers
              </h2>
              <div className="accent-line mb-6"></div>
              <p className="body-md text-brand-gray">
                From time to time, we may disclose your information to carefully selected service providers engaged by Yu Law Firm to host our website or provide other essential services. These service providers are contractually obligated to use the information solely for providing specified services and to adhere to this Privacy Policy.
              </p>
            </motion.div>

            {/* Additional Services */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="heading-md text-brand-black mb-6">
                Additional Services
              </h2>
              <div className="accent-line mb-6"></div>
              <p className="body-md text-brand-gray">
                We may offer additional services through our website, which may be subject to alternative terms of use. Your use of such services constitutes acceptance of these terms, which supplement this Agreement.
              </p>
            </motion.div>

            {/* Security of Information */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="heading-md text-brand-black mb-6">
                Security of Information Sent Via Website
              </h2>
              <div className="accent-line mb-6"></div>
              <p className="body-md text-brand-gray">
                Information sent to us via internet email or through our website is not secure and is done so on a non-confidential basis. Any information you transmit to Yu Law Firm via the internet is at your own risk.
              </p>
            </motion.div>

            {/* No Attorney-Client Relationship */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="heading-md text-brand-black mb-6">
                No Attorney-Client Relationship
              </h2>
              <div className="accent-line mb-6"></div>
              <p className="body-md text-brand-gray">
                Transmission of information from our website does not establish an attorney-client relationship between you and Yu Law Firm. The transmission of our website, in part or in whole, or any communication with us via internet email through this site, does not constitute or create an attorney-client relationship between us and any recipients.
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              className="bg-brand-cream p-8 border-l-4 border-brand-red"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="heading-sm text-brand-black mb-4">Questions About Our Privacy Policy?</h3>
              <p className="body-md text-brand-gray mb-4">
                If you have any questions or concerns about our privacy practices, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:940-239-9840" 
                  className="text-brand-red font-acherus font-medium hover:text-brand-black transition-colors"
                >
                  Call: (940) 239-9840
                </a>
                <span className="hidden sm:inline text-brand-gray">|</span>
                <a 
                  href="mailto:eservice@attorneyyu.com" 
                  className="text-brand-red font-acherus font-medium hover:text-brand-black transition-colors"
                >
                  Email: eservice@attorneyyu.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Privacy
