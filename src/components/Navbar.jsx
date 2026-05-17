import { useEffect, useRef } from 'react'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        navRef.current?.classList.add('scrolled')
      } else {
        navRef.current?.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#casos', label: 'Casos de Éxito' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <nav ref={navRef} className="navbar py-5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="Adicort inicio">
          <img
            src="/images/logo.png"
            alt="Adicort logo"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span
            style={{ fontFamily: 'Outfit, sans-serif' }}
            className="text-white font-bold text-xl tracking-widest uppercase"
          >
            ADICORT
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium tracking-wider uppercase transition-colors duration-200 hover:text-amber-300"
              style={{ letterSpacing: '0.1em' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="btn-primary text-sm px-5 py-2.5"
            id="nav-cta"
          >
            Solicitar Presupuesto
          </a>
        </div>

        {/* Mobile hamburger placeholder */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
          onClick={() => {
            const menu = document.getElementById('mobile-menu')
            menu?.classList.toggle('hidden')
          }}
        >
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-4 h-0.5 bg-white block" />
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className="hidden md:hidden mt-4 px-6 pb-4 flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white/80 hover:text-white text-base py-2 border-b border-white/10"
          >
            {link.label}
          </a>
        ))}
        <a href="#contacto" className="btn-primary mt-2 text-center justify-center">
          Solicitar Presupuesto
        </a>
      </div>
    </nav>
  )
}
