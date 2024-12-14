export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sobre Nosotros</h3>
                        <p className="text-sm">Somos una empresa dedicada a ofrecer los mejores departamentos en arriendo, con un servicio personalizado y de calidad.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            <li><a href="#inicio" className="text-sm hover:text-blue-400">Inicio</a></li>
                            <li><a href="#servicios" className="text-sm hover:text-blue-400">Servicios</a></li>
                            <li><a href="#contacto" className="text-sm hover:text-blue-400">Contacto</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                        <p className="text-sm">Dirección: Calle Ejemplo 123, Santiago, Chile</p>
                        <p className="text-sm">Teléfono: +56 9 1234 5678</p>
                        <p className="text-sm">Email: info@ejemplo.com</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
                    © 2024 Arriendo de cabañas
                </div>
            </div>
        </footer>
    )
}
