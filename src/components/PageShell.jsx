import React from 'react'
import { motion } from 'framer-motion'

// Wraps every page for enter/exit transitions (used with AnimatePresence).
export default function PageShell({ children }) {
  return (
    <motion.main
      id="main"
      tabIndex={-1}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ outline: 'none' }}
    >
      {children}
    </motion.main>
  )
}
