import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import BackToTop from './components/BackToTop'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <AnimatePresence>
        {loading && <Preloader key="preloader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <WhatsAppFAB />
      <BackToTop />
    </>
  )
}
