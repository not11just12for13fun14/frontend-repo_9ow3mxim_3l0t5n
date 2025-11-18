import React, { useEffect, useState } from 'react'

const Loader = () => {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 2400)
    const originalOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      clearTimeout(t)
      document.documentElement.style.overflow = originalOverflow
    }
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 ${hide ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      aria-hidden={!hide}
    >
      <div className="flex flex-col items-center select-none">
        <svg
          width="420"
          height="150"
          viewBox="0 0 420 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-6"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="word-stroke"
            fill="transparent"
            stroke="#ffffff"
            strokeWidth="1.6"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '64px', letterSpacing: '0.06em' }}
          >
            difdele
          </text>
        </svg>
        <div className="relative h-2 w-28">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-20 bg-white/70 animate-pulse" />
          <span className="absolute left-[5.5rem] top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white/90 animate-bounce" />
        </div>
      </div>
      <style>{`
        .word-stroke{
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 1.6s ease-out forwards;
        }
        @keyframes draw{to{stroke-dashoffset:0}}
      `}</style>
    </div>
  )
}

export default Loader
