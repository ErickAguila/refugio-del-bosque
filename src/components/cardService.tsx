import type { Cabin } from '../data'

type CardServiceProps = {
  cabin: Cabin
}

const BedIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18v-8m18 8v-5a2 2 0 0 0-2-2H8v7m-5-5h5m-5 5h18M8 11V8a2 2 0 0 0-2-2H4a1 1 0 0 0-1 1v6" /></svg>
const BathIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Zm3 0V6a3 3 0 0 1 6 0m-2 0h4" /></svg>
const AreaIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5m11-5v5h-5" /></svg>

export const CardService = ({ cabin }: CardServiceProps) => (
  <article className="cabin-card">
    <div className="cabin-image-wrap">
      <img src={cabin.image} alt={cabin.imageAlt} loading="lazy" width="768" height="1024" />
      <span className="cabin-capacity">Hasta {cabin.capacity} personas</span>
    </div>
    <div className="cabin-body">
      <p className="eyebrow">Una estadía acogedora</p>
      <h3>{cabin.name}</h3>
      <p>{cabin.description}</p>
      <ul className="cabin-features" aria-label={`Características de ${cabin.name}`}>
        <li>
          <span className="feature-value"><BedIcon /><strong>{cabin.rooms}</strong></span>
          <span>{cabin.rooms === 1 ? 'Habitación' : 'Habitaciones'}</span>
        </li>
        <li>
          <span className="feature-value"><BathIcon /><strong>{cabin.bathrooms}</strong></span>
          <span>{cabin.bathrooms === 1 ? 'Baño' : 'Baños'}</span>
        </li>
        <li>
          <span className="feature-value"><AreaIcon /><strong>{cabin.area} m²</strong></span>
          <span>Superficie</span>
        </li>
      </ul>
      <a className="text-link" href="#contacto" aria-label={`Consultar disponibilidad de ${cabin.name}`}>
        Consultar disponibilidad <span aria-hidden="true">→</span>
      </a>
    </div>
  </article>
)
