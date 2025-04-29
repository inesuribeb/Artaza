// import { useState, useRef, useEffect } from 'react';
// import WestIcon from '@mui/icons-material/West';
// import EastIcon from '@mui/icons-material/East';
// import './CarouselLocation.css';

// function CarouselLocation() {
//     const carouselRef = useRef(null);
//     const [showRightArrow, setShowRightArrow] = useState(false);
//     const [showLeftArrow, setShowLeftArrow] = useState(false);
//     const [isAtStart, setIsAtStart] = useState(true);
//     const [isAtEnd, setIsAtEnd] = useState(false);
    
//     const images = [
//         '/images/carousel/Carousel1.png',
//         '/images/carousel/Carousel2.png',
//         '/images/carousel/Carousel3.png',
//         '/images/carousel/Carousel4.png',
//         '/images/carousel/Carousel5.png',
//         '/images/carousel/Carousel6.png',
//         '/images/carousel/Carousel7.png',
//         '/images/elipse.jpg',
//         '/images/elipse.jpg',
//         '/images/elipse.jpg',
//         '/images/elipse.jpg',
//     ];
    
//     const checkScrollPosition = () => {
//         if (carouselRef.current) {
//             const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
//             setIsAtStart(scrollLeft === 0);
//             setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10); 
//         }
//     };
    
//     useEffect(() => {
//         checkScrollPosition();
//         window.addEventListener('resize', checkScrollPosition);
//         return () => window.removeEventListener('resize', checkScrollPosition);
//     }, []);
    
//     const scrollRight = () => {
//         if (carouselRef.current) {
//             const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth + 50; 
//             carouselRef.current.scrollBy({
//                 left: itemWidth,
//                 behavior: 'smooth'
//             });
            
//             setTimeout(checkScrollPosition, 500); 
//         }
//     };
    
//     const scrollLeft = () => {
//         if (carouselRef.current) {
//             const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth + 50;
//             carouselRef.current.scrollBy({
//                 left: -itemWidth,
//                 behavior: 'smooth'
//             });
            
//             setTimeout(checkScrollPosition, 500); 
//         }
//     };
    
//     const handleScroll = () => {
//         checkScrollPosition();
//     };

//     return (
//         <div 
//             className="carousel-container"
//             onMouseEnter={() => {
//                 setShowRightArrow(!isAtEnd);
//                 setShowLeftArrow(!isAtStart);
//             }}
//             onMouseLeave={() => {
//                 setShowRightArrow(false);
//                 setShowLeftArrow(false);
//             }}
//         >
//             {showLeftArrow && !isAtStart && (
//                 <button 
//                     className="carousel-arrow left-arrow"
//                     onClick={scrollLeft}
//                 >
//                     &lt;
//                 </button>
//             )}
            
//             <div 
//                 className="carousel-wrapper" 
//                 ref={carouselRef}
//                 onScroll={handleScroll}
//             >
//                 <div className="carousel-content">
//                     {images.map((image, index) => (
//                         <div 
//                             key={index} 
//                             className="carousel-item"
//                         >
//                             <div className="image-container">
//                                 <img 
//                                     src={image} 
//                                     alt={`Carousel image ${index + 1}`} 
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
            
//             {showRightArrow && !isAtEnd && (
//                 <button 
//                     className="carousel-arrow right-arrow"
//                     onClick={scrollRight}
//                 >
//                     &gt;
//                 </button>
//             )}
//         </div>
//     );
// }

// export default CarouselLocation;

import { useState, useRef, useEffect } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import './CarouselLocation.css';

function CarouselLocation() {
    const carouselRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [hasScrolledOnce, setHasScrolledOnce] = useState(false);
    
    // Array de imágenes para el carrusel
    const images = [
        '/images/carousel/Carousel1.png',
        '/images/carousel/Carousel2.png',
        '/images/carousel/Carousel5.png',
        '/images/carousel/Carousel4.png',
        '/images/carousel/Carousel3.png',
        '/images/carousel/Carousel6.png',
        '/images/carousel/Carousel7.png',
        '/images/elipse.jpg',
        '/images/elipse.jpg',
        '/images/elipse.jpg',
        '/images/elipse.jpg',
    ];
    
    // Verificar posición del scroll
    const checkScrollPosition = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10); // 10px de margen de error
        }
    };
    
    // Efecto para comprobar la posición inicial
    useEffect(() => {
        checkScrollPosition();
        // Agregar listener para actualizar al redimensionar
        window.addEventListener('resize', checkScrollPosition);
        return () => window.removeEventListener('resize', checkScrollPosition);
    }, []);
    
    // Función para desplazar a la derecha (solo una imagen)
    const scrollRight = () => {
        if (carouselRef.current) {
            // Ancho aproximado de un item + gap
            const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth + 50; // 50px es el gap
            carouselRef.current.scrollBy({
                left: itemWidth,
                behavior: 'smooth'
            });
            
            // Marcar que se ha desplazado al menos una vez
            setHasScrolledOnce(true);
            
            // Actualizar estado después del scroll
            setTimeout(checkScrollPosition, 500); // Esperar a que termine la animación
        }
    };
    
    // Función para desplazar a la izquierda (solo una imagen)
    const scrollLeft = () => {
        if (carouselRef.current) {
            // Ancho aproximado de un item + gap
            const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth + 50; // 50px es el gap
            carouselRef.current.scrollBy({
                left: -itemWidth,
                behavior: 'smooth'
            });
            
            // Actualizar estado después del scroll
            setTimeout(checkScrollPosition, 500); // Esperar a que termine la animación
        }
    };
    
    // Función para detectar eventos de scroll manuales
    const handleScroll = () => {
        if (carouselRef.current && carouselRef.current.scrollLeft > 0) {
            setHasScrolledOnce(true);
        }
        checkScrollPosition();
    };

    return (
        <div className="carousel-container">
            <div 
                className="carousel-wrapper" 
                ref={carouselRef}
                onScroll={handleScroll}
            >
                <div className="carousel-content">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="carousel-item"
                        >
                            <div className="image-container">
                                <img 
                                    src={image} 
                                    alt={`Carousel image ${index + 1}`} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="carousel-navigation">
                <button 
                    className={`carousel-button ${(!hasScrolledOnce || isAtStart) ? 'invisible' : ''}`}
                    onClick={scrollLeft}
                    aria-label="Anterior"
                    aria-hidden={!hasScrolledOnce || isAtStart}
                >
                    <WestIcon />
                </button>
                
                {!isAtEnd && (
                    <button 
                        className="carousel-button"
                        onClick={scrollRight}
                        aria-label="Siguiente"
                    >
                        <EastIcon />
                    </button>
                )}
            </div>
        </div>
    );
}

export default CarouselLocation;