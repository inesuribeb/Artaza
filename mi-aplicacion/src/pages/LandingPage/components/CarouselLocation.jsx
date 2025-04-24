import { useState, useRef } from 'react';
import './CarouselLocation.css';

function CarouselLocation() {
    const carouselRef = useRef(null);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    
    // Array de imágenes para el carrusel
    const images = [
        '/images/elipse.jpg',
        '/images/elipse.jpg',
        '/images/elipse.jpg',
        '/images/elipse.jpg',
        '/images/elipse.jpg',
        '/images/elipse.jpg',
        '/images/elipse.jpg',
        '/images/elipse.jpg',
    ];
    
    // Función para desplazar a la derecha
    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.offsetWidth * 0.8,
                behavior: 'smooth'
            });
        }
    };
    
    // Función para desplazar a la izquierda
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.offsetWidth * 0.8,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div 
            className="carousel-container"
            onMouseEnter={() => {
                setShowRightArrow(true);
                setShowLeftArrow(true);
            }}
            onMouseLeave={() => {
                setShowRightArrow(false);
                setShowLeftArrow(false);
            }}
        >
            {showLeftArrow && (
                <button 
                    className="carousel-arrow left-arrow"
                    onClick={scrollLeft}
                >
                    &lt;
                </button>
            )}
            
            <div className="carousel-wrapper" ref={carouselRef}>
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
            
            {showRightArrow && (
                <button 
                    className="carousel-arrow right-arrow"
                    onClick={scrollRight}
                >
                    &gt;
                </button>
            )}
        </div>
    );
}

export default CarouselLocation;