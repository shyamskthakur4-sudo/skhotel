import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1250)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="loader__mark"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.circle
          cx="50" cy="50" r="37" fill="none" stroke="#f2b01e" strokeWidth="6.5"
          strokeLinecap="round" pathLength="1"
          initial={{ pathLength: 0, rotate: 38 }}
          animate={{ pathLength: 0.73 }}
          style={{ transformOrigin: '50% 50%', rotate: 38 }}
          transition={{ duration: 0.95, ease: 'easeInOut' }}
        />
        <motion.text
          x="51" y="63" fontFamily="Georgia, serif" fontWeight="700" fontSize="34"
          letterSpacing="-1" fill="#f2b01e" textAnchor="middle"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.4 }}
        >
          SK
        </motion.text>
      </motion.svg>

      <div className="loader__bar">
        <motion.div
          className="loader__fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.15, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left', width: '100%' }}
        />
      </div>
      <motion.div
        className="loader__word"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
      >
        Shri Kalyan · Khatu Shyam Ji
      </motion.div>
    </motion.div>
  )
}
