export const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <div>
        <a className="brand footer-brand" href="#inicio">Refugio del Bosque</a>
        <p>Cabañas para descansar y reconectarse con la naturaleza en el sur de Chile.</p>
      </div>
      <nav aria-label="Navegación del pie de página">
        <a href="#cabanas">Cabañas</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#galeria">Galería</a>
      </nav>
      <p className="copyright">© {new Date().getFullYear()} Refugio del Bosque</p>
    </div>
  </footer>
)
