import { useState, useRef, useEffect } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { useLanguage } from '../../../contexts/LanguageContext';
import './CarouselLocation.css';

function CarouselLocation({ visibleSections }) {
    const { t, getRoute } = useLanguage();
    const carouselRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [hasScrolledOnce, setHasScrolledOnce] = useState(false);
    
    const images = [
        '/images/carousel/Carousel1.png',
        '/images/carousel/Carousel2.png',
        '/images/carousel/Carousel5.png',
        // '/images/carousel/Carousel4.png',
        '/images/carousel/Carousel3.png',
        '/images/carousel/Carousel6.png',
        '/images/carousel/Carousel7.png',
    ];
    
    const checkScrollPosition = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10); // 10px de margen de error
        }
    };
    
    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('resize', checkScrollPosition);
        return () => window.removeEventListener('resize', checkScrollPosition);
    }, []);
    
    const scrollRight = () => {
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth + 50; // 50px es el gap
            carouselRef.current.scrollBy({
                left: itemWidth,
                behavior: 'smooth'
            });
            
            setHasScrolledOnce(true);
            
            setTimeout(checkScrollPosition, 500); // Esperar a que termine la animación
        }
    };
    
    const scrollLeft = () => {
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.querySelector('.carousel-item').offsetWidth + 50; // 50px es el gap
            carouselRef.current.scrollBy({
                left: -itemWidth,
                behavior: 'smooth'
            });
            
            setTimeout(checkScrollPosition, 500); 
        }
    };
    
    const handleScroll = () => {
        if (carouselRef.current && carouselRef.current.scrollLeft > 0) {
            setHasScrolledOnce(true);
        }
        checkScrollPosition();
    };

    return (
        // <div className="carousel-container">
        <div className={`carousel-container ${visibleSections.carouselLocation ? 'visible' : ''}`}>

            <div className="carousel-location">
                <h3>{t('artaza')}</h3>
            </div>

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