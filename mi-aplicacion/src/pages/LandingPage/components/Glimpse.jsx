// import { useState, useRef } from 'react';
// import './Glimpse.css';

// function Glimpse() {
//     const glimpseimages = [
//         '/images/glimpse/1.webp',
//         '/images/glimpse/2.webp',
//         '/images/glimpse/3.webp',
//         '/images/glimpse/4.webp',
//         '/images/glimpse/5.webp',
//         '/images/glimpse/6.webp',
//         '/images/glimpse/7.webp',
//         '/images/glimpse/8.webp',
//         '/images/glimpse/9.webp',
//         '/images/glimpse/10.webp',
//         '/images/glimpse/11.webp',
//         '/images/glimpse/12.webp',
//         '/images/glimpse/13.webp',
//         '/images/glimpse/14.webp',
//         '/images/glimpse/15.webp',
//         '/images/glimpse/16.webp',
//         '/images/glimpse/17.webp',
//         '/images/glimpse/18.webp',
//         '/images/glimpse/19.webp',
//         '/images/glimpse/20.webp',
//         '/images/glimpse/21.webp',
//     ];

//     const scrollContainerRef = useRef(null);
//     const [scrollPosition, setScrollPosition] = useState(0);
//     const [maxScroll, setMaxScroll] = useState(0);

//     const handleScroll = () => {
//         if (scrollContainerRef.current) {
//             const container = scrollContainerRef.current;
//             setScrollPosition(container.scrollLeft);
//             setMaxScroll(container.scrollWidth - container.clientWidth);
//         }
//     };

//     const scrollLeft = () => {
//         if (scrollContainerRef.current) {
//             scrollContainerRef.current.scrollBy({
//                 left: -300,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     const scrollRight = () => {
//         if (scrollContainerRef.current) {
//             scrollContainerRef.current.scrollBy({
//                 left: 300,
//                 behavior: 'smooth'
//             });
//         }
//     };

//     return (
//         <div className='glimpse-wrapper'>
//             <div className='view-container'>
//                 <div className='glimpse-intro'>
//                     <div className='intro-content'>
//                         <h2>A Glimpse</h2>
//                         <h3>Into</h3>
//                         <div className='footer-text'>Our Properties</div>
//                     </div>
//                     <button 
//                         className='scroll-arrow left-arrow' 
//                         onClick={scrollLeft}
//                         aria-label="Scroll left"
//                     >
//                         &#8592;
//                     </button>
//                 </div>
                
//                 <div 
//                     className='glimpse-images' 
//                     ref={scrollContainerRef}
//                     onScroll={handleScroll}
//                 >
//                     {glimpseimages.map((image, index) => (
//                         <img key={index} src={image} alt={`Property view ${index + 1}`} />
//                     ))}
//                 </div>
                
//                 <button 
//                     className='scroll-arrow right-arrow' 
//                     onClick={scrollRight}
//                     aria-label="Scroll right"
//                 >
//                     &#8594;
//                 </button>
                
//                 <div className='scroll-progress'>
//                     <div 
//                         className='progress-bar' 
//                         style={{ 
//                             width: `${maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0}%` 
//                         }}
//                     ></div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Glimpse;

import { useState, useRef } from 'react';
import './Glimpse.css';

function Glimpse() {
    const glimpseimages = [
        '/images/glimpse/1.webp',
        '/images/glimpse/2.webp',
        '/images/glimpse/3.webp',
        '/images/glimpse/4.webp',
        '/images/glimpse/5.webp',
        '/images/glimpse/6.webp',
        '/images/glimpse/7.webp',
        '/images/glimpse/8.webp',
        '/images/glimpse/9.webp',
        '/images/glimpse/10.webp',
        '/images/glimpse/11.webp',
        '/images/glimpse/12.webp',
        '/images/glimpse/13.webp',
        '/images/glimpse/14.webp',
        '/images/glimpse/15.webp',
        '/images/glimpse/16.webp',
        '/images/glimpse/17.webp',
        '/images/glimpse/18.webp',
        '/images/glimpse/19.webp',
        '/images/glimpse/20.webp',
        '/images/glimpse/21.webp',
    ];

    const scrollContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            setScrollPosition(container.scrollLeft);
            setMaxScroll(container.scrollWidth - container.clientWidth);
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='glimpse-wrapper'>
            <div className='view-container'>
                {/* Controles de navegación */}
                <button 
                    className='scroll-arrow left-arrow' 
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                >
                    &#8592;
                </button>
                
                <button 
                    className='scroll-arrow right-arrow' 
                    onClick={scrollRight}
                    aria-label="Scroll right"
                >
                    &#8594;
                </button>
                
                {/* Contenedor desplazable con todo el contenido */}
                <div 
                    className='glimpse-scrollable-content' 
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                >
                    {/* Panel de texto que se mueve */}
                    <div className='intro-content'>
                        <h1>A glimpse into our properties</h1>
                        <h2>A Glimpse</h2>
                        <h3>Into</h3>
                        <div className='footer-text'>Our Properties</div>
                    </div>
                    
                    {/* Imágenes */}
                    {glimpseimages.map((image, index) => (
                        <img 
                            key={index} 
                            src={image} 
                            alt={`Property view ${index + 1}`} 
                            className='glimpse-image'
                        />
                    ))}
                </div>
                
                {/* Barra de progreso */}
                <div className='scroll-progress'>
                    <div 
                        className='progress-bar' 
                        style={{ 
                            width: `${maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0}%` 
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Glimpse;
