import { useEffect, useRef } from 'react'

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    label: 'LinkedIn — Principal canal B2B',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/5493812345678',
    label: 'WhatsApp — Soporte técnico',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const sectionRef = useRef(null)

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

  return (
    <footer
      id="contacto"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#1a252f' }}
    >
      {/* Top bronze border */}
      <div
        className="w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #A67C52 40%, #c49a6c 60%, transparent)' }}
      />

      {/* Contact CTA band */}
      <div
        className="py-16 px-6 md:px-12 relative"
        style={{
          background: 'linear-gradient(135deg, rgba(166,124,82,0.15) 0%, transparent 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="fade-in text-center md:text-left">
            <h2
              className="text-white text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              ¿Listo para proteger tu negocio?
            </h2>
            <p className="text-white/50 text-base">
              Solicite su presupuesto sin cargo. Respuesta en menos de 24 horas.
            </p>
          </div>
          <div className="fade-in fade-in-delay-1 flex-shrink-0">
            <a
              href="mailto:contacto@adicort.com.ar"
              className="btn-primary text-base px-8 py-4"
              id="footer-cta"
            >
              Solicitar Presupuesto
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer main */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="fade-in">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="Adicort" className="h-8 w-8 object-contain" />
              <span
                className="text-white font-bold text-lg tracking-widest"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                ADICORT
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              Soluciones de cerramiento metálico de alta seguridad para el sector comercial e industrial. Calidad garantizada.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon text-white/50 hover:text-white"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="fade-in fade-in-delay-1">
            <h4
              className="text-white text-sm font-semibold tracking-[0.15em] uppercase mb-6"
              style={{ color: '#A67C52' }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 flex-shrink-0 text-amber-700/70" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:contacto@adicort.com.ar" className="footer-link">
                  contacto@adicort.com.ar
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 flex-shrink-0 text-amber-700/70" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <address className="footer-link not-italic leading-relaxed">
                  Av. Mate de Luna 4500<br />
                  San Miguel de Tucumán<br />
                  Argentina — C.P. 4000
                </address>
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-0.5 flex-shrink-0 text-amber-700/70" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.06 1.16 2 2 0 012.03 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.31 7.4a16 16 0 006.29 6.29l.96-.96a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
                <a href="https://wa.me/5493812345678" className="footer-link">
                  +54 9 381 234-5678
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="fade-in fade-in-delay-2">
            <h4
              className="text-sm font-semibold tracking-[0.15em] uppercase mb-6"
              style={{ color: '#A67C52' }}
            >
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#nosotros', label: 'Nosotros' },
                { href: '#casos', label: 'Casos de Éxito' },
                { href: '#contacto', label: 'Solicitar Presupuesto' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-link hover:translate-x-1 inline-flex transition-transform">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Adicort — Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Soluciones de Seguridad Perimetral · Tucumán, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
