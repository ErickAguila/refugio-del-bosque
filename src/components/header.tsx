import { BsFillHousesFill } from "react-icons/bs";

export const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <BsFillHousesFill color="bg-green-900"   size={32}/>
                        <p className='text-2xl font-bold capitalize text-green-900'>Refugio del bosque</p>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><a href="#inicio" className="text-gray-800 font-bold hover:text-green-900">Inicio</a></li>
                            <li><a href="#servicios" className="text-gray-800 font-bold hover:text-green-900">Cabañas</a></li>
                            <li><a href="#contacto" className="text-gray-800 font-bold hover:text-green-900">Contacto</a></li>
                        </ul>
                    </nav>
                    <div className="md:hidden">
                        <button className="text-gray-800 font-bold hover:text-green-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
