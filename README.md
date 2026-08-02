# Refugio del Bosque

Landing page de **Refugio del Bosque**, un alojamiento de cabañas en el sur de Chile. El sitio presenta las cabañas, sus principales características, la experiencia del entorno y una galería fotográfica, con llamados a la acción para consultar disponibilidad por WhatsApp.

## Características

- Diseño responsivo para dispositivos móviles, tablets y escritorio.
- Secciones de presentación, cabañas, beneficios, galería y contacto.
- Galería con visor de imágenes y navegación mediante teclado.
- Menú adaptable a pantallas pequeñas.
- Enlace directo a WhatsApp con un mensaje de consulta predefinido.
- Imágenes con carga diferida, salvo la imagen principal.
- Estilos de foco visibles, enlace para saltar al contenido y soporte para `prefers-reduced-motion`.

## Tecnologías

- React 18
- TypeScript
- Vite 6
- CSS
- ESLint
- React Icons

## Requisitos

- Node.js 18.18 o posterior (se recomienda una versión LTS vigente).
- npm.

## Instalación y desarrollo local

```bash
git clone <URL_DEL_REPOSITORIO>
cd refugio-del-bosque
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local de la aplicación, normalmente `http://localhost:5173`.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga automática. |
| `npm run build` | Comprueba TypeScript y genera la versión de producción en `dist/`. |
| `npm run lint` | Analiza el código con ESLint. |
| `npm run preview` | Sirve localmente el contenido generado en `dist/`. |

## Estructura principal

```text
.
├── public/
│   └── imgs/                 # Fotografías de las cabañas
├── src/
│   ├── assets/fonts/         # Archivos locales de Montserrat
│   ├── components/           # Secciones y componentes de la landing
│   ├── data/index.ts         # Información de cabañas y galería
│   ├── App.tsx               # Composición principal de la página
│   ├── index.css             # Sistema visual y estilos responsivos
│   └── main.tsx              # Punto de entrada de React
├── package.json
└── vite.config.ts
```

## Actualización de contenido

### Cabañas y galería

La información de las cabañas y el listado de fotografías se mantienen en `src/data/index.ts`. Cada imagen debe existir previamente dentro de `public` y su ruta pública debe comenzar con `/`, por ejemplo:

```ts
image: '/imgs/house1/img4.jpeg'
```

Incluye siempre un texto alternativo breve y descriptivo al agregar una imagen.

### Contacto por WhatsApp

El número y el mensaje predeterminado se configuran en `src/components/whatsappButton.tsx`, mediante la constante `whatsappUrl`. Esta misma URL se reutiliza en la sección final de contacto.

### Estilos

Los colores, tipografías, espaciados, radios, sombras y transiciones principales se definen como variables CSS al comienzo de `src/index.css`. Se recomienda modificar esas variables para conservar la consistencia visual del sitio.

## Generar una versión de producción

```bash
npm run build
npm run preview
```

El resultado queda en `dist/` y puede publicarse en cualquier servicio de hosting de sitios estáticos.

## Validación antes de publicar

```bash
npm run lint
npm run build
```

Actualmente el proyecto no tiene una suite de pruebas automatizadas configurada.
