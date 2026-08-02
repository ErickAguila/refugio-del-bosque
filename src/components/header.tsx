import { useEffect, useState } from 'react'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Galería', href: '#galeria' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const closeMenu = () => setIsOpen(false)
    mediaQuery.addEventListener('change', closeMenu)
    return () => mediaQuery.removeEventListener('change', closeMenu)
  }, [])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Refugio del Bosque, ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32"><path d="M16 3 8 14h4l-7 9h8v6h6v-6h8l-7-9h4L16 3Z" /></svg>
          </span>
          <span>Refugio del Bosque</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
        </button>

        <nav id="main-navigation" className={`main-navigation${isOpen ? ' is-open' : ''}`} aria-label="Navegación principal">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}><a href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a></li>
            ))}
          </ul>
          <a className="button button-primary header-cta" href="#contacto" onClick={() => setIsOpen(false)}>
            Consultar disponibilidad
          </a>
        </nav>
      </div>
    </header>
  )
}
