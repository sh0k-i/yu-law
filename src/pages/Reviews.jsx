import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link, useSearchParams } from 'react-router-dom'
import testimonialsData from '../data/testimonials.json'
import ReviewModal from '../components/ReviewModal'

const Reviews = () => {
  const { t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedReview, setSelectedReview] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openReviewModal = (testimonial) => {
    setSelectedReview(testimonial)
    setIsModalOpen(true)
  }

  const closeReviewModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedReview(null), 300)
    // Remove review parameter from URL when closing modal
    searchParams.delete('review')
    setSearchParams(searchParams)
  }
  
  // Handle URL parameter to open specific review modal
  useEffect(() => {
    const reviewId = searchParams.get('review')
    if (reviewId) {
      const review = testimonialsData.find(t => t.id === parseInt(reviewId))
      if (review) {
        openReviewModal(review)
      }
    }
  }, [searchParams])
  
  // Get unique case types for filtering
  const caseTypes = ['all', ...new Set(testimonialsData.map(t => t.caseType))]
  
  // Filter testimonials based on selected category
  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonialsData 
    : testimonialsData.filter(t => t.caseType === selectedCategory)
  
  // Sort by date (newest first)
  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  )
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
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
              {t('reviews.title', 'CLIENT REVIEWS')}
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
              {t('reviews.description', 'Read what our clients have to say about their experience with Yu Law Firm. Real stories from real people who trusted us with their legal matters.')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className="section-padding bg-brand-cream">
        <div className="container-responsive">
          
          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {caseTypes.map((type) => (
              <motion.button
                key={type}
                onClick={() => setSelectedCategory(type)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-acherus font-medium transition-all duration-300 border-2 touch-target ${
                  selectedCategory === type
                    ? 'bg-brand-red text-white border-brand-red shadow-lg'
                    : 'bg-white text-brand-black border-gray-200 hover:bg-brand-black hover:text-white hover:border-brand-black'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type === 'all' ? 'All Reviews' : type}
              </motion.button>
            ))}
          </motion.div>

          {/* Reviews Grid */}
          <motion.div 
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sortedTestimonials.map((testimonial) => (
              <motion.article
                key={testimonial.id}
                variants={itemVariants}
                className="bg-white shadow-lg overflow-hidden hover:shadow-[0_25px_50px_-12px_rgba(171,21,34,0.25)] transition-all duration-300 group flex flex-col cursor-pointer"
                whileHover={{ y: -8 }}
                onClick={() => openReviewModal(testimonial)}
              >
                {/* Card Header */}
                <div className="card-padding border-l-4 border-brand-red">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="heading-sm text-brand-black mb-1 group-hover:text-brand-red transition-colors duration-300">
                        {testimonial.subject}
                      </h3>
                      <p className="text-xs sm:text-sm font-acherus text-brand-gray">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Case Type Badge */}
                  <div className="inline-block px-2 sm:px-3 py-1 bg-brand-cream text-brand-black text-xs font-acherus font-medium mb-3 sm:mb-4">
                    {testimonial.caseType}
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-padding pt-0 flex-1 flex flex-col">
                  <p className="body-md text-brand-gray mb-3 sm:mb-4 flex-1">
                    {testimonial.body.length > 200 
                      ? `${testimonial.body.substring(0, 200)}...` 
                      : testimonial.body}
                  </p>
                  
                  {/* Date */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-200">
                    <p className="text-xs sm:text-sm font-acherus text-brand-gray">
                      {formatDate(testimonial.date)}
                    </p>
                    {testimonial.body.length > 200 && (
                      <span className="text-sm font-acherus text-brand-red group-hover:text-brand-black transition-colors duration-300 font-medium">
                        Read More →
                      </span>
                    )}
                  </div>
                </div>

                {/* Decorative accent */}
                <motion.div
                  className="h-1 bg-brand-red"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </motion.article>
            ))}
          </motion.div>

          {/* No Results Message */}
          {sortedTestimonials.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl font-acherus text-brand-gray">
                No reviews found for this category.
              </p>
            </motion.div>
          )}

          {/* Statistics Section */}
          <motion.div 
            className="mt-12 sm:mt-16 md:mt-20 bg-white card-padding shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid-responsive-3 text-center">
              <div>
                <div className="stat-number text-brand-red mb-1 sm:mb-2">
                  {testimonialsData.length}+
                </div>
                <p className="font-acherus text-brand-gray">
                  Happy Clients
                </p>
              </div>
              <div>
                <div className="stat-number text-brand-red mb-1 sm:mb-2">
                  5.0
                </div>
                <p className="stat-label text-brand-gray">
                  Average Rating
                </p>
              </div>
              <div>
                <div className="stat-number text-brand-red mb-1 sm:mb-2">
                  100%
                </div>
                <p className="stat-label text-brand-gray">
                  Satisfaction Rate
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-12 sm:mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="heading-md text-brand-black mb-3 sm:mb-4">
              {t('reviews.ctaTitle', 'Ready to Share Your Experience?')}
            </h3>
            <p className="body-lg text-brand-gray mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {t('reviews.ctaDescription', 'We value your feedback and would love to hear about your experience with Yu Law Firm.')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn-primary">
                {t('reviews.ctaButton', 'Contact Us')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Review Modal */}
      <ReviewModal 
        testimonial={selectedReview}
        isOpen={isModalOpen}
        onClose={closeReviewModal}
      />
    </>
  )
}

export default Reviews
