import { CardService } from "./cardService";
import { apartments, gallery } from "../data";

export const Service = () => {
    return (
        <section id="servicios" className="container mx-auto px-4 py-16">
            <div className='text-center'>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Nuestras cabañas</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                {apartments.map((apt) => (
                    <CardService
                        key={apt}
                        id={apt.id}
                        image={apt.image}
                        name={apt.name}
                        description={apt.description}
                        rooms={apt.rooms}
                        bathrooms={apt.bathrooms}
                        area={apt.area}
                    />
                ))}
            </div>
            <div className='text-center'>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Galería de Fotos</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.map((item) => (
                    <img
                        key={item.id}
                        src={item.url}
                        alt={`Foto ${item.id}`}
                        className="w-full h-96 object-cover rounded-md"
                    />
                ))}
            </div>
        </section>
    )
}
