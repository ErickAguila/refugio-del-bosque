const benefits = [
  { title: 'Espacios familiares', text: 'Cabañas con capacidad para compartir una estadía de hasta seis personas.', icon: '⌂' },
  { title: 'Privacidad y calma', text: 'Un entorno pensado para descansar lejos del ritmo y el ruido de la ciudad.', icon: '◇' },
  { title: 'Calidez interior', text: 'Ambientes acogedores con estufa y espacios para reunirse.', icon: '♨' },
  { title: 'Entorno natural', text: 'Áreas verdes y árboles acompañan la experiencia alrededor de las cabañas.', icon: '♧' },
]

export const Benefits = () => (
  <section id="experiencia" className="section benefits-section" aria-labelledby="benefits-title">
    <div className="container">
      <div className="section-heading section-heading-left">
        <p className="eyebrow">La experiencia</p>
        <h2 id="benefits-title">Lo que hace especial tu estadía</h2>
      </div>
      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <article className="benefit" key={benefit.title}>
            <span className="benefit-icon" aria-hidden="true">{benefit.icon}</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)
