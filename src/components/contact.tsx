import { whatsappUrl } from './whatsappButton'

export const Contact = () => (
  <section id="contacto" className="final-cta" aria-labelledby="contact-title">
    <div className="container final-cta-inner">
      <p className="eyebrow eyebrow-light">Tu próxima pausa</p>
      <h2 id="contact-title">Unos días de tranquilidad comienzan aquí</h2>
      <p>
        Consulta disponibilidad y planifica una estadía para descansar y compartir
        en un entorno natural.
      </p>
      <a
        className="button whatsapp-cta"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Consultar por WhatsApp
      </a>
    </div>
  </section>
)
