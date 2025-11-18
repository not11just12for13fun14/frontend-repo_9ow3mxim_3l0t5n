import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />
      <div className="relative z-10 container mx-auto px-6 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-white tracking-tight font-semibold text-5xl sm:text-6xl md:text-7xl"
          style={{fontFamily:'Manrope, Inter, system-ui'}}
        >
          DIFDELE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white/70 mt-4 text-lg sm:text-xl max-w-xl"
        >
          {/* leerer Platzhalter */}
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
