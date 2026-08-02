export const Hero = () => (
  <section id="inicio" className="hero" aria-labelledby="hero-title">
    <img
      className="hero-image"
      src="/imgs/house1/banner.png"
      alt="Dos cabañas de Refugio del Bosque rodeadas de árboles y áreas verdes"
      fetchPriority="high"
    />
    <div className="hero-overlay" />
    <div className="container hero-content">
      <p className="eyebrow eyebrow-light">Cabañas en el sur de Chile</p>
      <h1 id="hero-title">Descansa en medio de la naturaleza</h1>
      <p className="hero-copy">
        Cabañas acogedoras rodeadas de bosque y tranquilidad. Un espacio para
        desconectarte, respirar y compartir con quienes más quieres.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href="#contacto">Consultar disponibilidad</a>
        <a className="button button-secondary-light" href="#cabanas">Conocer las cabañas</a>
      </div>
    </div>
    <a className="hero-scroll" href="#bienvenida" aria-label="Continuar hacia la presentación">
      <span aria-hidden="true">↓</span> Descubre el refugio
    </a>
  </section>
)
