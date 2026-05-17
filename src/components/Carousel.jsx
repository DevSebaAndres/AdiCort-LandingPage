import { useState, useRef, useEffect, useCallback } from 'react'

const slides = [
  {
    id: 1,
    image: '/images/caso1.png',
    tag: 'Sector Retail',
    title: 'Boutique Comercial Premium',
    description:
      'Instalación de cortina metálica enrollable microperforada en una tienda de lujo del centro comercial. Sistema automatizado con control remoto y apertura de emergencia manual.',
    location: 'San Miguel de Tucumán',
    specs: ['Ancho 6m × Alto 4m', 'Motor 220V industrial', 'Acero galvanizado G90'],
  },
  {
    id: 2,
    image: '/images/caso2.png',
    tag: 'Sector Industrial',
    title: 'Nave Logística de Gran Escala',
    description:
      'Puerta seccional industrial de alta velocidad para el acceso de camiones en una nave de distribución logística. Resistente a vientos de hasta 120 km/h.',
    location: 'Parque Industrial Norte, Tucumán',
    specs: ['Ancho 8m × Alto 6m', 'Apertura rápida 0.8m/s', 'Aislamiento térmico R8'],
  },
  {
    id: 3,
    image: '/images/caso3.png',
    tag: 'Sector Gastronómico',
    title: 'Restaurante en Zona Comercial',
    description:
      'Cortina de lamas planas articuladas para un restaurante de alto tráfico en zona peatonal. Diseño que permite visibilidad parcial del interior cuando está cerrada.',
    location: 'Av. Mate de Luna, Tucumán',
    specs: ['Lamas 80mm articuladas', 'Perfiles inoxidables', 'Cerradura multipunto'],
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const trackRef = useRef(null)
  const autoRef = useRef(null)
  const sectionRef = useRef(null)

  const goTo = useCallback((index) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Autoplay
  useEffect(() => {
    autoRef.current = setInterval(next, 5000)
    return () => clearInterval(autoRef.current)
  }, [next])

  const resetAuto = () => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(next, 5000)
  }

  // Touch / drag handlers
  const handlePointerDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX ?? e.touches?.[0]?.clientX ?? 0)
    setDragOffset(0)
    resetAuto()
  }

  const handlePointerMove = (e) => {
    if (!isDragging) return
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0
    setDragOffset(x - startX)
  }

  const handlePointerUp = () => {
    if (isDragging) {
      if (dragOffset < -60) next()
      else if (dragOffset > 60) prev()
      setIsDragging(false)
      setDragOffset(0)
    }
  }

  // Fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.querySelectorAll('.fade-in').forEach((el) => el.classList.add('visible'))
        }),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const translateX = -(current * 100) + (isDragging ? (dragOffset / (trackRef.current?.clientWidth || 1)) * 100 : 0)

  return (
    <section
      id="casos"
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: '#1a252f' }}
    >
      {/* Background texture */}
      <div className="texture-overlay opacity-30" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, rgba(166,124,82,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <span className="section-tag fade-in" style={{ color: '#c49a6c' }}>
            Casos de Éxito
          </span>
          <h2
            className="fade-in fade-in-delay-1"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.15,
            }}
          >
            Instalaciones que{' '}
            <span style={{ color: '#A67C52' }}>hablan por sí solas.</span>
          </h2>
          <div className="section-divider fade-in fade-in-delay-2" />
        </div>

        {/* Carousel */}
        <div className="fade-in fade-in-delay-2">
          <div
            ref={trackRef}
            className="carousel-container rounded-sm select-none"
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          >
            <div
              className="carousel-track"
              style={{
                transform: `translateX(${translateX}%)`,
                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="carousel-slide" style={{ aspectRatio: '16/7' }}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  {/* Slide overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(26,37,47,0.92) 0%, rgba(26,37,47,0.65) 45%, transparent 100%)',
                    }}
                  />
                  {/* Slide content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="p-8 md:p-12 max-w-lg">
                      <span
                        className="inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 px-3 py-1"
                        style={{ background: 'rgba(166,124,82,0.25)', color: '#c49a6c', borderLeft: '2px solid #A67C52' }}
                      >
                        {slide.tag}
                      </span>
                      <h3
                        className="text-white text-2xl md:text-3xl font-bold mb-3"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {slide.title}
                      </h3>
                      <p className="text-white/65 text-sm leading-relaxed mb-5">
                        {slide.description}
                      </p>
                      <p className="text-white/40 text-xs mb-4 flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        {slide.location}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {slide.specs.map((s) => (
                          <span
                            key={s}
                            className="text-xs px-2.5 py-1 border text-white/60"
                            style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === current ? 'active' : ''}`}
                  onClick={() => { goTo(i); resetAuto() }}
                  aria-label={`Ir al caso ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              {[
                { dir: 'prev', fn: () => { prev(); resetAuto() }, path: 'M19 12H5M12 19l-7-7 7-7' },
                { dir: 'next', fn: () => { next(); resetAuto() }, path: 'M5 12h14M12 5l7 7-7 7' },
              ].map(({ dir, fn, path }) => (
                <button
                  key={dir}
                  onClick={fn}
                  aria-label={dir === 'prev' ? 'Anterior' : 'Siguiente'}
                  className="w-11 h-11 flex items-center justify-center border border-white/20 text-white/60 hover:border-amber-600/60 hover:text-amber-400 transition-all duration-200 hover:bg-amber-600/10"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={path} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
