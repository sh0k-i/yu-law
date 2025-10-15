import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const ReviewModal = ({ testimonial, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!testimonial) return null

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                className="relative bg-white w-full max-w-3xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-brand-gray hover:text-brand-red transition-colors duration-300 z-10"
                  aria-label="Close modal"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal Content */}
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="border-l-4 border-brand-red pl-6 mb-8">
                    <h2 className="text-3xl md:text-4xl font-lancea text-brand-black mb-3">
                      {testimonial.subject}
                    </h2>
                    <p className="text-lg font-acherus text-brand-gray mb-4">
                      {testimonial.name}
                    </p>
                    
                    {/* Rating */}
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 items-center">
                      <div className="inline-block px-3 py-1 bg-brand-cream text-brand-black text-sm font-acherus font-medium">
                        {testimonial.caseType}
                      </div>
                      <p className="text-sm font-acherus text-brand-gray">
                        {formatDate(testimonial.date)}
                      </p>
                    </div>
                  </div>

                  {/* Full Review Body */}
                  <div className="prose prose-lg max-w-none">
                    <p className="font-acherus text-brand-gray leading-relaxed text-lg whitespace-pre-line">
                      {testimonial.body}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                      <p className="text-sm font-acherus text-brand-gray italic">
                        Thank you for trusting Yu Law Firm with your legal matter.
                      </p>
                      <button
                        onClick={onClose}
                        className="btn-primary"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative accent */}
                <div className="h-2 bg-brand-red" />
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ReviewModal
