import { useEffect, useRef } from 'react'

const values = [
  {
    icon: '🔩',
    title: 'Robustez',
    description:
      'Fabricamos con acero galvanizado de alta resistencia y perfiles de ingeniería certificados. Cada cortina es una barrera física confiable.',
  },
  {
    icon: '🤝',
    title: 'Integridad',
    description:
      'Transparencia total en presupuestos, plazos y materiales. Construimos relaciones comerciales de largo plazo basadas en la confianza.',
  },
  {
    icon: '⏱️',
    title: 'Puntualidad',
    description:
      'Cumplimos los tiempos acordados en cada etapa del proyecto, desde la medición técnica hasta la instalación final y puesta en marcha.',
  },
  {
    icon: '🛠️',
    title: 'Soporte Técnico',
    description:
      'Equipo de técnicos especializados disponible para mantenimiento preventivo, correctivo y asistencia de emergencia en toda la región.',
  },
]

export default function Nosotros() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el) => {
              el.classList.add('visible')
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style={{
          background: 'linear-gradient(270deg, rgba(166,124,82,0.04) 0%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-tag fade-in">La Empresa</span>
          <h2 className="section-title fade-in fade-in-delay-1">
            Veinte años protegiendo
            <br />
            <span style={{ color: '#A67C52' }}>lo que más importa.</span>
          </h2>
          <div className="section-divider fade-in fade-in-delay-1" />
        </div>

        {/* Misión / Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Misión */}
          <div
            className="fade-in fade-in-delay-1 p-8 metal-stripe"
            style={{ borderLeft: '3px solid #A67C52', background: '#F8F7F5' }}
          >
            <h3
              className="text-lg font-bold mb-3 tracking-wide"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#2C3E50' }}
            >
              MISIÓN
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Proveer soluciones de cerramiento metálico de la más alta calidad, garantizando la tranquilidad y protección de los activos de nuestros clientes comerciales e industriales con tecnología y materiales de primera línea.
            </p>
          </div>

          {/* Visión */}
          <div
            className="fade-in fade-in-delay-2 p-8"
            style={{ borderLeft: '3px solid #2C3E50', background: '#F8F7F5' }}
          >
            <h3
              className="text-lg font-bold mb-3 tracking-wide"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#2C3E50' }}
            >
              VISIÓN
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ser el referente nacional en seguridad perimetral para el sector retail e industrial, liderando por innovación continua, excelencia en el servicio y el más alto estándar de instalación del mercado.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div>
          <h3
            className="text-sm font-semibold tracking-[0.2em] uppercase mb-8 fade-in"
            style={{ color: '#A67C52' }}
          >
            Nuestros Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`value-card fade-in fade-in-delay-${i + 1}`}
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h4
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif', color: '#2C3E50' }}
                >
                  {v.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 pt-12 fade-in"
          style={{ borderTop: '1px solid #e0dedd' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '+500', label: 'Instalaciones Completadas' },
              { num: '20', label: 'Años de Experiencia' },
              { num: '98%', label: 'Clientes Satisfechos' },
              { num: '24h', label: 'Soporte de Emergencia' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-number">{stat.num}</div>
                <p className="text-sm text-gray-500 mt-2 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
