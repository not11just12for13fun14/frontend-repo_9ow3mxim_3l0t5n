import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Basketball = () => (
  <svg viewBox="0 0 100 100" className="w-20 h-20" aria-hidden="true">
    <circle cx="50" cy="50" r="48" fill="#FF7A00" stroke="#1a1a1a" strokeWidth="2"/>
    <path d="M2 50 H98" stroke="#1a1a1a" strokeWidth="2"/>
    <path d="M50 2 V98" stroke="#1a1a1a" strokeWidth="2"/>
    <path d="M10 20 C40 40, 60 60, 90 80" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
    <path d="M10 80 C40 60, 60 40, 90 20" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
  </svg>
)

const About = () => {
  const ballRef = useRef(null)
  const shadowRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power2.out' }
      })

      // start position
      gsap.set(ballRef.current, { y: -160, xPercent: -50, left: '50%', position: 'absolute' })
      gsap.set(shadowRef.current, { opacity: 0, scale: 0.4, xPercent: -50, left: '50%', bottom: '20px', position: 'absolute' })

      tl
        .to(ballRef.current, { y: 0, duration: 0.9, ease: 'bounce.out' }, 0)
        .to(shadowRef.current, { opacity: 0.35, scale: 1, duration: 0.9, ease: 'power2.out' }, 0)
        .to(ballRef.current, { x: () => containerRef.current.offsetWidth + 120, duration: 1.2, ease: 'power1.in' })
        .to(shadowRef.current, { x: () => containerRef.current.offsetWidth + 120, opacity: 0, duration: 1.2, ease: 'power1.in' }, '<')
        .add(() => {
          ballRef.current?.remove()
          shadowRef.current?.remove()
        })

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 70%',
        once: true,
        onEnter: () => tl.play()
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div ref={ballRef}><Basketball /></div>
      <div ref={shadowRef} className="pointer-events-none">
        <div className="h-4 w-24 bg-black/40 blur-md rounded-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight" style={{fontFamily:'Manrope, Inter, system-ui'}}>About</h2>
        </div>
      </div>
    </section>
  )
}

export default About
