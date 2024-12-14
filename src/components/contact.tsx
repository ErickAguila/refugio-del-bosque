export const Contact = () => {
    return (
        <section id="contacto" className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className='text-center'>
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">Contáctanos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-4">Información de Contacto</h3>
                        <div className="space-y-4">
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center" onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" clipRule="evenodd" />
                                </svg>
                                Contactar por WhatsApp
                            </button>
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center" onClick={() => window.location.href = 'mailto:info@ejemplo.com'}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                Contactar por Correo
                            </button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-4">Nuestra Ubicación</h3>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2568401490627!2d-70.64912368480213!3d-33.43756808077689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c507f91be46f%3A0x1b7e9d3f9d0c2a1a!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2s!4v1625097721279!5m2!1ses-419!2s"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                className="w-full h-full rounded-md"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
