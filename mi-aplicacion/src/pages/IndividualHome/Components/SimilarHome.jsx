import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import PropertyCart from '../../Properties/components/PropertyCart'
import { homes } from '../../../utils/Homes'
import useMediaQuery from '../../../hooks/useMediaQuery'
import './SimilarHome.css'

// function SimilarHome({ property, language, t }) {
//     const [similarProperties, setSimilarProperties] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const itemsToShow = 2; 
    
//     const extractPriceValue = (priceString) => {
//         if (!priceString) return 0;
//         const cleanedPrice = priceString.replace(/€/g, '').trim();
//         const withoutDots = cleanedPrice.replace(/\./g, '');
//         const withDecimal = withoutDots.replace(/,/g, '.');
//         return parseFloat(withDecimal) || 0;
//     };

//     useEffect(() => {
//         const storedFilters = localStorage.getItem('propertyFilters');
//         let filters = null;
        
//         try {
//             if (storedFilters) {
//                 filters = JSON.parse(storedFilters);
//             }
//         } catch (e) {
//             console.error('Error parsing stored filters:', e);
//         }

//         const otherHomes = homes.filter(home => home.id !== property.id);
//         let similarHomes = [];

//         if (filters && (filters.propertyCount || filters.neighborhood || filters.budget)) {
//             similarHomes = otherHomes.filter(home => {
//                 let match = true;

//                 if (filters.propertyCount && filters.propertyCount !== t('anyNumber')) {
//                     const bedroomMatch = filters.propertyCount.match(/(\d+)/);
//                     if (bedroomMatch && bedroomMatch[1]) {
//                         const bedroomCount = parseInt(bedroomMatch[1]);
//                         if (!isNaN(bedroomCount)) {
//                             match = match && home.bedrooms >= bedroomCount;
//                         }
//                     }
//                 }

//                 if (filters.neighborhood && filters.neighborhood !== t('anyNeighbourhood')) {
//                     match = match && home.location && 
//                            home.location.toLowerCase().includes(filters.neighborhood.toLowerCase());
//                 }

//                 if (filters.budget && filters.budget !== t('anyBudget')) {
//                     const priceValue = extractPriceValue(home.price);

//                     if (filters.budget === t('budget400to600')) {
//                         match = match && priceValue >= 400000 && priceValue <= 600000;
//                     } else if (filters.budget === t('budget600to800')) {
//                         match = match && priceValue >= 600000 && priceValue <= 800000;
//                     } else if (filters.budget === t('budget800to1M')) {
//                         match = match && priceValue >= 800000 && priceValue <= 1000000;
//                     } else if (filters.budget === t('budget1MPlus')) {
//                         match = match && priceValue > 1000000;
//                     }
//                 }

//                 return match;
//             });
//         }


//         if (similarHomes.length < 6) {
//             const similarityScores = otherHomes
//                 .filter(home => !similarHomes.some(similar => similar.id === home.id))
//                 .map(home => {
//                     let score = 0;
                    
//                     if (home.bedrooms === property.bedrooms) score += 3;
//                     else if (Math.abs(home.bedrooms - property.bedrooms) === 1) score += 2;
                    
//                     if (home.bathrooms === property.bathrooms) score += 2;
                    
//                     if (home.location && property.location) {
//                         const propertyLocation = property.location.toLowerCase();
//                         const homeLocation = home.location.toLowerCase();
//                         if (homeLocation.includes(propertyLocation.split(',')[0]) || 
//                             propertyLocation.includes(homeLocation.split(',')[0])) {
//                             score += 3;
//                         }
//                     }
                    
//                     if (home.type && property.type && 
//                         home.type[language] === property.type[language]) {
//                         score += 2;
//                     }
                    
//                     const propertyPrice = extractPriceValue(property.price);
//                     const homePrice = extractPriceValue(home.price);
//                     if (propertyPrice > 0 && homePrice > 0) {
//                         const priceDiff = Math.abs(propertyPrice - homePrice) / propertyPrice;
//                         if (priceDiff <= 0.2) score += 2;
//                     }
                    
//                     ['terrace', 'balcony', 'garden', 'pool', 'garage'].forEach(feature => {
//                         if (property[feature] && home[feature]) score += 1;
//                     });
                    
//                     return { home, score };
//                 });
            
//             similarityScores.sort((a, b) => b.score - a.score);
            
//             for (const { home } of similarityScores) {
//                 similarHomes.push(home);
//                 if (similarHomes.length >= 6) break;
//             }
//         }

//         setSimilarProperties(similarHomes);
//         setCurrentIndex(0);
//     }, [property, language, t]);

//     const totalPages = Math.ceil(similarProperties.length / itemsToShow);
    
//     const nextSlide = () => {
//         const nextIndex = currentIndex + 1;
//         if (nextIndex < totalPages) {
//             setCurrentIndex(nextIndex);
//         } else {
//             setCurrentIndex(0);
//         }
//     };

//     const prevSlide = () => {
//         const prevIndex = currentIndex - 1;
//         if (prevIndex >= 0) {
//             setCurrentIndex(prevIndex);
//         } else {
//             setCurrentIndex(totalPages - 1);
//         }
//     };

//     const goToPage = (pageIndex) => {
//         setCurrentIndex(pageIndex);
//     };

//     if (similarProperties.length === 0) {
//         return null;
//     }

//     const currentProperties = similarProperties.slice(
//         currentIndex * itemsToShow, 
//         (currentIndex * itemsToShow) + itemsToShow
//     );

//     return (
//         <div className='similar-home-wrapper'>
//             <div className='title-info'>
//                 <h1>
//                     <span className="first-line">{t('similarPropertiesFirstLine')}</span>
//                     <br />
//                     <span className="second-line">{t('similarPropertiesSecondLine')}</span>
//                 </h1>
//             </div>

//             <div className='similar-carousel'>
//                 <div className='similar-carousel-container'>
//                     <button 
//                         className="carousel-control prev-button" 
//                         onClick={prevSlide}
//                         aria-label="Previous properties"
//                     >
//                         <WestIcon />
//                     </button>

//                     <div className="carousel-inner">
//                         {currentProperties.map((similarProperty) => (
//                             <div 
//                                 key={similarProperty.id} 
//                                 className="carousel-item"
//                             >
//                                 <PropertyCart property={similarProperty} />
//                             </div>
//                         ))}
//                     </div>

//                     <button 
//                         className="carousel-control next-button" 
//                         onClick={nextSlide}
//                         aria-label="Next properties"
//                     >
//                         <EastIcon />
//                     </button>
//                 </div>

//                 {totalPages > 1 && (
//                     <div className="carousel-indicators">
//                         {Array.from({ length: totalPages }).map((_, index) => (
//                             <button
//                                 key={index}
//                                 className={`indicator ${index === currentIndex ? 'active' : ''}`}
//                                 onClick={() => goToPage(index)}
//                                 aria-label={`Go to slide ${index + 1}`}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default SimilarHome;

function SimilarHome({ property, language, t }) {
    const [similarProperties, setSimilarProperties] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const carouselRef = useRef(null);
    
    // Detectar si es móvil
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 992px) and (min-width: 769px)');
    
    // Determinar cuántos elementos mostrar según el dispositivo
    const itemsToShow = isMobile ? 1 : isTablet ? 1 : 2;
    
    // Función para extraer el valor numérico del precio
    const extractPriceValue = (priceString) => {
        if (!priceString) return 0;
        const cleanedPrice = priceString.replace(/€/g, '').trim();
        const withoutDots = cleanedPrice.replace(/\./g, '');
        const withDecimal = withoutDots.replace(/,/g, '.');
        return parseFloat(withDecimal) || 0;
    };

    useEffect(() => {
        // Obtener los filtros guardados en localStorage
        const storedFilters = localStorage.getItem('propertyFilters');
        let filters = null;
        
        try {
            if (storedFilters) {
                filters = JSON.parse(storedFilters);
            }
        } catch (e) {
            console.error('Error parsing stored filters:', e);
        }

        // Excluir la propiedad actual
        const otherHomes = homes.filter(home => home.id !== property.id);
        let similarHomes = [];

        if (filters && (filters.propertyCount || filters.neighborhood || filters.budget)) {
            // Si hay filtros guardados, usarlos para encontrar propiedades similares
            similarHomes = otherHomes.filter(home => {
                let match = true;

                // Filtro por número de habitaciones
                if (filters.propertyCount && filters.propertyCount !== t('anyNumber')) {
                    const bedroomMatch = filters.propertyCount.match(/(\d+)/);
                    if (bedroomMatch && bedroomMatch[1]) {
                        const bedroomCount = parseInt(bedroomMatch[1]);
                        if (!isNaN(bedroomCount)) {
                            match = match && home.bedrooms >= bedroomCount;
                        }
                    }
                }

                // Filtro por vecindario
                if (filters.neighborhood && filters.neighborhood !== t('anyNeighbourhood')) {
                    match = match && home.location && 
                           home.location.toLowerCase().includes(filters.neighborhood.toLowerCase());
                }

                // Filtro por presupuesto
                if (filters.budget && filters.budget !== t('anyBudget')) {
                    const priceValue = extractPriceValue(home.price);

                    if (filters.budget === t('budget400to600')) {
                        match = match && priceValue >= 400000 && priceValue <= 600000;
                    } else if (filters.budget === t('budget600to800')) {
                        match = match && priceValue >= 600000 && priceValue <= 800000;
                    } else if (filters.budget === t('budget800to1M')) {
                        match = match && priceValue >= 800000 && priceValue <= 1000000;
                    } else if (filters.budget === t('budget1MPlus')) {
                        match = match && priceValue > 1000000;
                    }
                }

                return match;
            });
        }

        // Si no hay suficientes propiedades similares por filtros o no hay filtros,
        // agregar propiedades por características similares
        if (similarHomes.length < 6) {
            // Crear una puntuación de similitud para cada propiedad
            const similarityScores = otherHomes
                .filter(home => !similarHomes.some(similar => similar.id === home.id))
                .map(home => {
                    let score = 0;
                    
                    // Mismo número de habitaciones
                    if (home.bedrooms === property.bedrooms) score += 3;
                    // Habitaciones similares (+/- 1)
                    else if (Math.abs(home.bedrooms - property.bedrooms) === 1) score += 2;
                    
                    // Mismo número de baños
                    if (home.bathrooms === property.bathrooms) score += 2;
                    
                    // Ubicación similar (misma zona/barrio)
                    if (home.location && property.location) {
                        const propertyLocation = property.location.toLowerCase();
                        const homeLocation = home.location.toLowerCase();
                        if (homeLocation.includes(propertyLocation.split(',')[0]) || 
                            propertyLocation.includes(homeLocation.split(',')[0])) {
                            score += 3;
                        }
                    }
                    
                    // Tipo de propiedad similar
                    if (home.type && property.type && 
                        home.type[language] === property.type[language]) {
                        score += 2;
                    }
                    
                    // Rango de precio similar (dentro del +/- 20%)
                    const propertyPrice = extractPriceValue(property.price);
                    const homePrice = extractPriceValue(home.price);
                    if (propertyPrice > 0 && homePrice > 0) {
                        const priceDiff = Math.abs(propertyPrice - homePrice) / propertyPrice;
                        if (priceDiff <= 0.2) score += 2;
                    }
                    
                    // Características similares
                    ['terrace', 'balcony', 'garden', 'pool', 'garage'].forEach(feature => {
                        if (property[feature] && home[feature]) score += 1;
                    });
                    
                    return { home, score };
                });
            
            // Ordenar por puntuación de similitud
            similarityScores.sort((a, b) => b.score - a.score);
            
            // Agregar las propiedades más similares
            for (const { home } of similarityScores) {
                similarHomes.push(home);
                if (similarHomes.length >= 6) break;
            }
        }

        setSimilarProperties(similarHomes);
        setCurrentIndex(0); // Resetear el índice al cambiar las propiedades
    }, [property, language, t]);

    // Calcular el número total de páginas
    const totalPages = Math.ceil(similarProperties.length / itemsToShow);
    
    const nextSlide = () => {
        // Avanzar al siguiente grupo
        const nextIndex = currentIndex + 1;
        if (nextIndex < totalPages) {
            setCurrentIndex(nextIndex);
        } else {
            // Volver al principio
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        // Retroceder al grupo anterior
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            setCurrentIndex(prevIndex);
        } else {
            // Ir al último grupo
            setCurrentIndex(totalPages - 1);
        }
    };

    const goToPage = (pageIndex) => {
        setCurrentIndex(pageIndex);
    };

    // Manejadores de eventos táctiles para deslizamiento en móvil
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;
        
        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    // No mostrar nada si no hay propiedades similares
    if (similarProperties.length === 0) {
        return null;
    }

    // Para móvil, queremos mostrar un poco del siguiente elemento
    if (isMobile) {
        return (
            <div className='similar-home-wrapper'>
                <div className='title-info'>
                    <h1>
                        <span className="first-line">{t('similarPropertiesFirstLine')}</span>
                        <br />
                        <span className="second-line">{t('similarPropertiesSecondLine')}</span>
                    </h1>
                </div>

                <div className='similar-carousel mobile'>
                    <div 
                        className='similar-carousel-container mobile'
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        ref={carouselRef}
                    >
                        <div 
                            className="carousel-inner mobile"
                            style={{
                                transform: `translateX(-${currentIndex * 85}%)`,
                                transition: 'transform 0.5s ease'
                            }}
                        >
                            {similarProperties.map((similarProperty) => (
                                <div 
                                    key={similarProperty.id} 
                                    className="carousel-item mobile"
                                >
                                    <PropertyCart property={similarProperty} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {totalPages > 1 && (
                        <div className="carousel-indicators">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => goToPage(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Para tablet y desktop
    // Mostrar exactamente las propiedades actuales (2 por página en desktop, 1 en tablet)
    const currentProperties = similarProperties.slice(
        currentIndex * itemsToShow, 
        (currentIndex * itemsToShow) + itemsToShow
    );

    return (
        <div className='similar-home-wrapper'>
            <div className='title-info-sim'>
                <h1>
                    <span className="first-line">{t('similarPropertiesFirstLine')}</span>
                    <br />
                    <span className="second-line">{t('similarPropertiesSecondLine')}</span>
                </h1>
            </div>

            <div className='similar-carousel'>
                <div className='similar-carousel-container'>
                    <button 
                        className="carousel-control prev-button" 
                        onClick={prevSlide}
                        aria-label="Previous properties"
                    >
                        <WestIcon />
                    </button>

                    <div className="carousel-inner">
                        {currentProperties.map((similarProperty) => (
                            <div 
                                key={similarProperty.id} 
                                className="carousel-item"
                            >
                                <PropertyCart property={similarProperty} />
                            </div>
                        ))}
                    </div>

                    <button 
                        className="carousel-control next-button" 
                        onClick={nextSlide}
                        aria-label="Next properties"
                    >
                        <EastIcon />
                    </button>
                </div>

                {totalPages > 1 && (
                    <div className="carousel-indicators">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToPage(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SimilarHome;