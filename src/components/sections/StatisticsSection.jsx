import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const StatisticsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  // State for animated counters
  const [cases, setCases] = useState(0)
  const [recovered, setRecovered] = useState(0)

  // Target values
  const targetCases = 200
  const targetRecovered = 1000000 // $1,000,000

  // Animation function for counting
  const animateValue = (start, end, duration, setValue) => {
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const value = Math.floor(progress * (end - start) + start)
      setValue(value)
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }

  useEffect(() => {
    if (isInView) {
      // Start animations with slight delays
      setTimeout(() => animateValue(0, targetCases, 2500, setCases), 300)
      setTimeout(() => animateValue(0, targetRecovered, 3000, setRecovered), 600)
    }
  }, [isInView])

  const formatMoney = (num) => {
    return `$${num.toLocaleString()}`
  }

  const formatNumber = (num) => {
    return num.toLocaleString()
  }

  return (
    <section className="py-8 bg-brand-red" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* First Stat - Cases */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-base md:text-lg font-acherus text-gray-300 mb-3 tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              MORE THAN
            </motion.p>
            <motion.div 
              className="text-5xl md:text-6xl lg:text-7xl font-lancea mb-3 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {formatNumber(cases)}+
            </motion.div>
            <motion.p 
              className="text-base md:text-lg font-acherus text-white tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              CASES SUCCESSFULLY HANDLED
            </motion.p>
          </motion.div>

          {/* Second Stat - Money Recovered */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p 
              className="text-base md:text-lg font-acherus text-gray-300 mb-3 tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              MORE THAN
            </motion.p>
            <motion.div 
              className="text-5xl md:text-6xl lg:text-7xl font-lancea mb-3 text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {formatMoney(recovered)}
            </motion.div>
            <motion.p 
              className="text-base md:text-lg font-acherus text-white tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              RECOVERED FOR OUR CLIENTS
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
