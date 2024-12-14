import { MdLocalHotel, MdBathroom } from "react-icons/md";
import { BsTextarea } from "react-icons/bs";

export const CardService = (props: any) => {
    const { id, image, name, description, rooms, bathrooms, area } = props
    return (
        <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{name}</h3>
            </div>
            <img
                src={image}
                alt={name}
                className="w-full h-[700px] object-cover"
            />
            <div className='p-4'>
                <p className='text-gray-600'>{description}</p>
            </div>
            <div className="p-4">
                <div className="flex justify-start gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                        <MdLocalHotel size={25} />
                        {rooms}
                    </span>
                    <span className="flex items-center gap-1">
                        <MdBathroom size={25} />
                        {bathrooms}
                    </span>
                    <span className="flex items-center gap-1">
                        <BsTextarea size={25} />
                        {area} m²
                    </span>
                </div>
            </div>
        </div>
    )
}
