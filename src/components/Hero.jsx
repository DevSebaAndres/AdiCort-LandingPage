export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      {/* Background image */}
      <img
        src="/images/hero.png"
        alt="Cortina metálica de seguridad Adicort en fachada comercial al atardecer"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
      />

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Metal stripe texture */}
      <div className="texture-overlay" />

      {/* Animated vertical lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[15, 30, 50, 70, 85].map((pos) => (
          <div
            key={pos}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${pos}%`,
              background: 'linear-gradient(180deg, transparent, rgba(166,124,82,0.12) 30%, rgba(166,124,82,0.18) 60%, transparent)',
              animation: `vertLine ${2 + pos * 0.02}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero-content w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 mb-6 fade-in"
            style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.2s forwards' }}
          >
            <div className="w-8 h-px bg-amber-500/70" />
            <span className="text-amber-400/90 text-xs font-semibold tracking-[0.25em] uppercase">
              Soluciones de Seguridad Perimetral
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-white font-bold leading-tight mb-6"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              opacity: 0,
              animation: 'fadeUp 0.9s ease 0.4s forwards',
            }}
          >
            Adicort: Blindamos la{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c49a6c, #A67C52)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Seguridad
            </span>{' '}
            de tu Negocio.
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ opacity: 0, animation: 'fadeUp 0.9s ease 0.6s forwards' }}
          >
            Cortinas metálicas de alta seguridad diseñadas para el sector retail e industrial. Instalación profesional y garantía de por vida.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ opacity: 0, animation: 'fadeUp 0.9s ease 0.8s forwards' }}
          >
            <a href="#contacto" className="btn-primary" id="hero-cta-primary">
              Solicitar Presupuesto
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#casos" className="btn-outline" id="hero-cta-secondary">
              Ver Instalaciones
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity: 0, animation: 'fadeUp 1s ease 1.2s forwards' }}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-amber-400/80"
            style={{ height: '40%', animation: 'scrollPulse 2s ease-in-out infinite' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        @keyframes vertLine {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
