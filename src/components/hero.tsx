import banner from '../../public/imgs/house1/img10.jpeg';

export const Hero = () => {
    return (
        <section id="inicio" className="relative h-[700px]">
            <img
                src={banner}
                alt="Portada de departamentos"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-[700px] text-white text-center bg-black bg-opacity-50 px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Bienvenido a zona de descanso</h1>
                <p className="text-lg md:text-xl mb-8">Descubre los mejores lugares para relajarte.</p>
                <a href="#servicios" className="bg-green-900 hover:bg-green-950 text-white font-bold py-2 px-4 rounded">
                    Ver cabañas
                </a>
            </div>
        </section>
    )
}
