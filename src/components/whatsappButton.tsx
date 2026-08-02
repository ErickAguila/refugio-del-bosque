export const whatsappUrl = 'https://wa.me/56974761505?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20en%20Refugio%20del%20Bosque.'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16.05 3A12.82 12.82 0 0 0 5 22.3L3.2 29l6.86-1.8A12.86 12.86 0 1 0 16.05 3Zm0 23.47c-1.9 0-3.77-.5-5.4-1.46l-.39-.23-4.07 1.07 1.09-3.97-.25-.41a10.65 10.65 0 1 1 9.02 5Zm5.84-7.98c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.65 9.65 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.17-1.52.27-.74.27-1.38.19-1.51-.08-.14-.29-.21-.61-.37Z" />
  </svg>
)

export const WhatsappButton = () => (
  <a
    className="whatsapp-float"
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Consultar disponibilidad por WhatsApp; se abre en una nueva pestaña"
  >
    <span className="whatsapp-label" aria-hidden="true">¿Consultas?</span>
    <span className="whatsapp-icon"><WhatsAppIcon /></span>
  </a>
)
