import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const Section = ({ id, title }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -40])

  return (
    <section id={id} className="relative py-24 sm:py-28 md:py-32">
      <motion.div style={{ y }} className="container mx-auto px-6 sm:px-8">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white/90 tracking-tight" style={{fontFamily:'Manrope, Inter, system-ui'}}>
          {title}
        </h3>
        <div className="mt-8 h-40 rounded-xl border border-white/10 bg-white/[0.02]" />
      </motion.div>
    </section>
  )
}

export default Section
