import React from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'
import About from './components/About'
import Section from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Loader />

      <Hero />

      <About />

      <Section id="services" title="Services" />

      <Section id="contact" title="Kontakt" />

      <footer className="border-t border-white/10">
        <div className="container mx-auto px-6 sm:px-8 py-10 flex items-center justify-between">
          <div className="text-white/60">DIFDELE</div>
          <div className="text-white/40">©</div>
        </div>
      </footer>
    </div>
  )
}

export default App
