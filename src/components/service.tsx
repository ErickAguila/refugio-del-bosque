import { CardService } from './cardService'
import { cabins } from '../data'

export const Cabins = () => (
  <section id="cabanas" className="section cabins-section" aria-labelledby="cabins-title">
    <div className="container">
      <div className="section-heading">
        <p className="eyebrow">Tu espacio para descansar</p>
        <h2 id="cabins-title">Elige tu cabaña en el bosque</h2>
        <p>Dos espacios preparados para una estadía tranquila, cómoda y conectada con el entorno.</p>
      </div>
      <div className="cabins-grid">
        {cabins.map((cabin) => <CardService key={cabin.id} cabin={cabin} />)}
      </div>
    </div>
  </section>
)
