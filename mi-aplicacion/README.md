# Inmobiliaria Artaza

![Logo Inmobiliaria Artaza](./public/images/LOGO 1.png)

## Descripción del Proyecto / Project Description

### Español
Plataforma web moderna para Inmobiliaria Artaza, diseñada para mostrar propiedades inmobiliarias en Getxo y alrededores con una experiencia visual sofisticada. Ofrece búsquedas personalizadas a través de un sistema de filtrado avanzado y diseño elegante adaptado a todos los dispositivos. Con navegación bilingüe y animaciones sutiles que mejoran la experiencia del usuario.

### English
Modern web platform for Inmobiliaria Artaza, designed to showcase real estate properties in Getxo and surrounding areas with a sophisticated visual experience. It offers customized searches through an advanced filtering system and elegant design adapted to all devices. With bilingual navigation and subtle animations that enhance the user experience.

## Tecnologías Utilizadas / Technologies Used

- React + Vite
- React Router 6.x
- Context API para gestión de estado
- Framer Motion para animaciones
- CSS modular
- Custom Hooks para media queries y animaciones
- Carousel personalizado

## Características Principales / Main Features

### Sistema Bilingüe con Rutas Diferenciadas / Bilingual System with Different Paths

- Soporte completo para español e inglés
- Rutas independientes para cada idioma:
  - Español: `/inicio/*`
  - Inglés: `/home/*`
- Detección automática del idioma del navegador
- Manejo de estado de scroll al cambiar de idioma (se mantiene en la misma posición)
- Animación de transición al cambiar entre idiomas

### Contexto de Lenguaje / Language Context

El proyecto implementa Context API para gestionar el estado global del idioma en toda la aplicación, permitiendo un cambio dinámico entre español e inglés. Este contexto se aplica a todos los textos de la interfaz, descripciones de propiedades, formularios y elementos de navegación, garantizando una experiencia coherente en ambos idiomas.

### Header Dinámico / Dynamic Header

El encabezado de la web cambia automáticamente su apariencia según la sección en la que se encuentre el usuario:
- Transparente con texto blanco en la página de inicio
- Fondo blanco con texto azul en secciones internas
- Incluye detección de hover para cambios de estilo
- Menú adaptativo con animaciones de despliegue
- Versiones específicas para desktop y móvil
- Cierre automático del menú al cambiar de idioma en móvil

### Efectos y Animaciones / Effects and Animations

La aplicación cuenta con numerosos efectos visuales que mejoran la experiencia de usuario:
- Efecto "cortina" al cargar la página con animación del logo
- Animaciones secuenciales para elementos en la página principal
- Efectos de superposición en contenedores de contenido
- Transiciones suaves entre páginas
- Animaciones en hover para tarjetas de propiedades

### Carousel Personalizado / Custom Carousel

Se han implementado varios tipos de carousels adaptados a diferentes necesidades:
- Carousel para mostrar fotos del barrio en la página principal
- Carousel para propiedades destacadas
- Carousel detallado para galerías de propiedad individual
- Comportamiento diferenciado en versión móvil (sin botones de navegación)
- Transiciones animadas entre imágenes

### Sistema de Filtrado Avanzado / Advanced Filtering System

El proyecto incluye un sofisticado sistema de filtrado de propiedades:
- Filtrado dinámico por múltiples criterios
- Presentación de resultados en grid con paginación
- Funcionalidad de scroll automático al área de resultados
- Efectos visuales al pasar el cursor sobre las propiedades
- Sistema completamente adaptado a ambos idiomas

### Diseño Responsive / Responsive Design

La plataforma está completamente adaptada a todo tipo de dispositivos:
- Detección del tipo de dispositivo mediante hooks personalizados
- Componentes específicos para la versión móvil
- Bloqueo inteligente de scroll cuando el menú móvil está abierto
- Formularios con diseño minimalista (solo border-bottom) adaptados a cada pantalla
- Comportamiento optimizado de elementos visuales en cada formato

### Manejo Avanzado de Navegación / Advanced Navigation Handling

- Scroll a la parte superior al cambiar de página
- Mantenimiento de la posición de scroll al cambiar de idioma
- Referencias para que la paginación dirija a zonas específicas
- Cierre automático de menús desplegables al navegar
- Efectos de transición entre rutas

## Estructura del Proyecto / Project Structure

El proyecto está organizado en una estructura modular y clara:

- **public/**: Archivos estáticos como imágenes y fuentes
  - assets/images/: Logos, imágenes de propiedades, etc.
  - assets/fonts/: Tipografías personalizadas

- **src/components/**: Componentes de la aplicación organizados por categorías
  - layout/: Componentes estructurales (Header, Footer, etc.)
  - landing/: Componentes específicos de la página principal
  - properties/: Componentes para listado y detalle de propiedades
  - common/: Elementos reutilizables (botones, inputs, etc.)

- **src/contexts/**: Contextos de React para gestión de estado
  - LanguageContext.jsx: Gestión del idioma en la aplicación

- **src/hooks/**: Hooks personalizados
  - useMediaQuery.jsx: Detección de breakpoints responsive
  - useIsMobile.jsx: Identificación específica de dispositivos móviles
  - useAnimation.jsx: Gestión de animaciones y efectos

- **src/pages/**: Páginas principales de la aplicación
  - LandingPage.jsx, Properties.jsx, etc.

- **src/utils/**: Utilidades y datos
  - homes.js: Información de propiedades

## Instalación / Installation

```bash
# Clonar el repositorio / Clone the repository
git clone https://github.com/inmobiliaria-artaza/website.git

# Cambiar al directorio / Change directory
cd inmobiliaria-artaza

# Instalar dependencias / Install dependencies
npm install

# Iniciar servidor de desarrollo / Start development server
npm run dev

# Compilar para producción / Build for production
npm run build

# Desplegar en VPS / Deploy in VPS
npm run deploy
```

## Flujo de Navegación / Navigation Flow

La aplicación implementa un sofisticado sistema de navegación con las siguientes características:

- **Páginas principales**: Inicio, Propiedades, Comprar, Vender, Contacto
- **Rutas anidadas**: Cada propiedad tiene su propia página detallada
- **Navegación bilingüe**: Rutas paralelas en español e inglés
- **Redirección inteligente**: Detecta el idioma preferido del usuario
- **Transiciones suaves**: Efectos de opacidad entre cambios de ruta
- **Gestión avanzada del scroll**: Comportamiento optimizado al navegar

## Formularios / Forms

Los formularios en la aplicación siguen un diseño minimalista y elegante:

- **Diseño limpio**: Inputs con border-bottom únicamente
- **Validación**: Verificación de campos requeridos
- **Estados visuales**: Cambios de estilo en focus, hover y error
- **Adaptabilidad**: Comportamiento optimizado en móvil y desktop
- **Integración con idioma**: Textos dinámicos según el idioma seleccionado

## Despliegue / Deployment

El proyecto está configurado para ser desplegado en un VPS (Servidor Privado Virtual) mediante un proceso optimizado que garantiza tiempos de carga mínimos y máximo rendimiento. La configuración de despliegue incluye:

- Optimización de assets estáticos
- Compresión de imágenes
- Estrategias de caching
- Configuración de seguridad

## Créditos / Credits

Desarrollado por Ines Uribe para Inmobiliaria Artaza - 2025

---

© 2025 Inmobiliaria Artaza. Todos los derechos reservados / All rights reserved.