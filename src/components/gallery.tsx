import { useEffect, useRef, useState } from 'react'
import { gallery } from '../data'

const getPreviousIndex = (index: number) => (index - 1 + gallery.length) % gallery.length
const getNextIndex = (index: number) => (index + 1) % gallery.length

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)
  const isOpen = activeIndex !== null

  const closeGallery = () => {
    setActiveIndex(null)
    window.requestAnimationFrame(() => openerRef.current?.focus())
  }

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
        window.requestAnimationFrame(() => openerRef.current?.focus())
      }
      if (event.key === 'ArrowLeft') setActiveIndex((current) => current === null ? null : getPreviousIndex(current))
      if (event.key === 'ArrowRight') setActiveIndex((current) => current === null ? null : getNextIndex(current))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const activeImage = activeIndex === null ? null : gallery[activeIndex]

  return (
    <section id="galeria" className="section gallery-section" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Una mirada al refugio</p>
          <h2 id="gallery-title">Espacios para sentirte en casa</h2>
          <p>Selecciona una fotografía para verla en detalle y recorrer la galería.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure className={image.className ?? ''} key={image.id}>
              <button
                className="gallery-trigger"
                type="button"
                aria-label={`Ampliar imagen: ${image.alt}`}
                onClick={(event) => {
                  openerRef.current = event.currentTarget
                  setActiveIndex(index)
                }}
              >
                <img src={image.url} alt={image.alt} loading="lazy" />
                <span className="gallery-zoom" aria-hidden="true">Ampliar <span>↗</span></span>
              </button>
            </figure>
          ))}
        </div>
      </div>

      {activeImage && activeIndex !== null ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Visor de fotografías"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery()
          }}
        >
          <button ref={closeButtonRef} className="lightbox-close" type="button" onClick={closeGallery} aria-label="Cerrar galería">
            <span aria-hidden="true">×</span>
          </button>
          <button
            className="lightbox-arrow lightbox-previous"
            type="button"
            onClick={() => setActiveIndex(getPreviousIndex(activeIndex))}
            aria-label="Ver fotografía anterior"
          >
            <span aria-hidden="true">←</span>
          </button>
          <figure className="lightbox-content">
            <img src={activeImage.url} alt={activeImage.alt} />
            <figcaption>
              <span>{activeImage.alt}</span>
              <span>{activeIndex + 1} / {gallery.length}</span>
            </figcaption>
          </figure>
          <button
            className="lightbox-arrow lightbox-next"
            type="button"
            onClick={() => setActiveIndex(getNextIndex(activeIndex))}
            aria-label="Ver fotografía siguiente"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : null}
    </section>
  )
}
