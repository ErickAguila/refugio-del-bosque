export type Cabin = {
  id: number
  name: string
  image: string
  imageAlt: string
  description: string
  capacity: number
  rooms: number
  bathrooms: number
  area: number
}

export type GalleryImage = {
  id: number
  url: string
  alt: string
  className?: string
}

export const cabins: Cabin[] = [
  {
    id: 1,
    name: 'Cabaña de interior claro',
    image: '/imgs/house1/img4.jpeg',
    imageAlt: 'Comedor y living luminoso de la primera cabaña',
    description: 'Cabaña cómoda para seis personas, con cama matrimonial, camarote, cama nido de una plaza y media, televisión por cable y baño amplio.',
    capacity: 6,
    rooms: 2,
    bathrooms: 1,
    area: 65,
  },
  {
    id: 2,
    name: 'Cabaña de interior en madera',
    image: '/imgs/house2/img4.jpg',
    imageAlt: 'Living y comedor revestidos en madera de la segunda cabaña',
    description: 'Cabaña cómoda para seis personas, con cama matrimonial, camarote, cama nido de una plaza y media, televisión por cable y baño amplio.',
    capacity: 6,
    rooms: 2,
    bathrooms: 1,
    area: 65,
  },
]

export const gallery: GalleryImage[] = [
  { id: 1, url: '/imgs/house2/img4.jpg', alt: 'Living cálido con amplios ventanales y revestimiento de madera', className: 'gallery-tall' },
  { id: 2, url: '/imgs/house1/banner.png', alt: 'Vista exterior de las cabañas entre árboles y áreas verdes', className: 'gallery-wide' },
  { id: 3, url: '/imgs/house1/img8.jpeg', alt: 'Dormitorio preparado para una estadía confortable' },
  { id: 4, url: '/imgs/house1/img4.jpeg', alt: 'Comedor familiar conectado con el living' },
  { id: 5, url: '/imgs/house2/img7.jpg', alt: 'Dormitorio de la cabaña con terminaciones en madera' },
  { id: 6, url: '/imgs/house1/img11.jpeg', alt: 'Entorno verde y natural alrededor de las cabañas', className: 'gallery-wide' },
  { id: 7, url: '/imgs/house1/img1.jpeg', alt: 'Cocina equipada junto al comedor con vista al área verde' },
  { id: 8, url: '/imgs/house2/img1.jpg', alt: 'Tinaja de madera calentada a fuego al atardecer', className: 'gallery-tall' },
  { id: 9, url: '/imgs/house1/img2.jpeg', alt: 'Living luminoso con estufa y comedor familiar' },
  { id: 10, url: '/imgs/house1/img3.jpeg', alt: 'Baño con ducha y terminaciones en tonos piedra' },
  { id: 11, url: '/imgs/house1/img5.jpeg', alt: 'Dormitorio matrimonial con vista al entorno natural' },
  { id: 12, url: '/imgs/house1/img6.jpeg', alt: 'Dormitorio con camarote y cama individual' },
  { id: 13, url: '/imgs/house1/img7.jpeg', alt: 'Dormitorio matrimonial preparado con ropa de cama y toallas' },
  { id: 14, url: '/imgs/house1/img9.jpeg', alt: 'Cocina equipada y comedor para seis personas', className: 'gallery-wide' },
  { id: 15, url: '/imgs/house2/img2.jpg', alt: 'Living revestido en madera con ventanales hacia las áreas verdes' },
  { id: 16, url: '/imgs/house2/img3.jpg', alt: 'Living cálido con sofás, estufa y vista exterior' },
  { id: 17, url: '/imgs/house2/img5.jpg', alt: 'Living amplio iluminado por ventanales en dos muros', className: 'gallery-wide' },
  { id: 18, url: '/imgs/house2/img6.jpg', alt: 'Cocina equipada integrada al comedor de la cabaña' },
  { id: 19, url: '/imgs/house2/img8.jpg', alt: 'Dormitorio matrimonial con muros de madera y vista al campo' },
  { id: 20, url: '/imgs/house2/img9.jpg', alt: 'Comedor para seis personas conectado con el living' },
]
