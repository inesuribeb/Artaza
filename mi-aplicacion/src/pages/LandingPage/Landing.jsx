import React, { useEffect, useRef, useState } from 'react';
import Welcome from "./components/Welcome";
import InmoLocation from "./components/InmoLocation";
import CarouselLocation from "./components/CarouselLocation";
import PropertiesLand from "./components/PropertiesLand";
import BuyHomes from "./components/BuyHomes";
import Valuation from '../../components/Valuation/Valuation';
import { useHeaderStyle } from '../../components/Header/HeaderStyleContext';
import './Landing.css';

// function Landing() {
//     const [scrollProgress, setScrollProgress] = useState(0);
//     const contentRef = useRef(null);

//     const inmoLocationRef = useRef(null);
//     const carouselLocationRef = useRef(null);
//     const buyHomesRef = useRef(null);
//     const propertiesLandRef = useRef(null);
//     const valuationRef = useRef(null);

//     const [visibleSections, setVisibleSections] = useState({
//         inmoLocation: false,
//         carouselLocation: false,
//         buyHomes: false,
//         propertiesLand: false
//     });

//     useEffect(() => {
//         let rafId = null;

//         const handleScroll = () => {
//             if (rafId) cancelAnimationFrame(rafId);

//             rafId = requestAnimationFrame(() => {
//                 const windowHeight = window.innerHeight;
//                 const scrollY = window.scrollY;
//                 const progress = Math.min(scrollY / windowHeight, 1);
//                 setScrollProgress(progress);
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             if (rafId) cancelAnimationFrame(rafId);
//         };
//     }, []);

//     useEffect(() => {
//         const observerOptions = {
//             threshold: 0.3,  
//             rootMargin: '0px'
//         };

//         const handleIntersection = (entries, observer) => {
//             entries.forEach(entry => {
//                 const targetId = entry.target.dataset.sectionId;

//                 if (entry.isIntersecting && targetId) {
//                     setVisibleSections(prev => ({
//                         ...prev,
//                         [targetId]: true
//                     }));

//                     observer.unobserve(entry.target);
//                 }
//             });
//         };

//         const observer = new IntersectionObserver(handleIntersection, observerOptions);

//         const sections = [
//             { ref: inmoLocationRef.current, id: 'inmoLocation' },
//             { ref: carouselLocationRef.current, id: 'carouselLocation' },
//             { ref: buyHomesRef.current, id: 'buyHomes' },
//             { ref: propertiesLandRef.current, id: 'propertiesLand' },
//             { ref: valuationRef.current, id: 'valuation' }
//         ];

//         sections.forEach(section => {
//             if (section.ref) {
//                 section.ref.dataset.sectionId = section.id;
//                 observer.observe(section.ref);
//             }
//         });

//         return () => {
//             sections.forEach(section => {
//                 if (section.ref) {
//                     observer.unobserve(section.ref);
//                 }
//             });
//         };
//     }, []);

//     return (
//         <div className="main-landing-container">
//             <section className="welcome-section">
//                 <Welcome scrollProgress={scrollProgress} />
//             </section>
//             <section ref={contentRef} className="content-container">
//                 <div ref={inmoLocationRef} data-section-id="inmoLocation">
//                     <InmoLocation visibleSections={visibleSections} />
//                 </div>
//                 <div ref={carouselLocationRef} data-section-id="carouselLocation">
//                     <CarouselLocation visibleSections={visibleSections} />
//                 </div>
//                 <div ref={buyHomesRef} data-section-id="buyHomes">
//                     <BuyHomes visibleSections={visibleSections} />
//                 </div>
//                 <div ref={propertiesLandRef} data-section-id="propertiesLand">
//                     <PropertiesLand visibleSections={visibleSections} />
//                 </div>
//                 <div ref={valuationRef} data-section-id="valuation">
//                     <Valuation visibleSections={visibleSections} />
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Landing;

function Landing() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const contentRef = useRef(null);
    const welcomeRef = useRef(null); // Añadir ref para la sección Welcome
    const { setHeaderClassName } = useHeaderStyle(); // Usar el contexto

    const inmoLocationRef = useRef(null);
    const carouselLocationRef = useRef(null);
    const buyHomesRef = useRef(null);
    const propertiesLandRef = useRef(null);
    const valuationRef = useRef(null);

    const [visibleSections, setVisibleSections] = useState({
        welcome: true, // Inicialmente la sección welcome está visible
        inmoLocation: false,
        carouselLocation: false,
        buyHomes: false,
        propertiesLand: false,
        valuation: false
    });

    // Efecto para manejar el scroll y determinar qué sección está visible
    useEffect(() => {
        let rafId = null;

        const handleScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                const progress = Math.min(scrollY / windowHeight, 1);
                setScrollProgress(progress);
                
                // Actualizar el estado de visibilidad de Welcome basado en scroll
                if (scrollY < windowHeight * 0.5) {
                    setVisibleSections(prev => ({
                        ...prev,
                        welcome: true
                    }));
                    // Aplicar la clase white-section-active cuando Welcome está visible
                    setHeaderClassName('white-section-active');
                } else {
                    setVisibleSections(prev => ({
                        ...prev,
                        welcome: false
                    }));
                    // Quitar la clase cuando Welcome no está visible
                    setHeaderClassName('');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        // Asegurarnos de establecer el estado inicial
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
            // Limpiar la clase al desmontar
            setHeaderClassName('');
        };
    }, [setHeaderClassName]);

    // Tu código existente para el IntersectionObserver...
    useEffect(() => {
        const observerOptions = {
            threshold: 0.3,  
            rootMargin: '0px'
        };

        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                const targetId = entry.target.dataset.sectionId;

                if (entry.isIntersecting && targetId) {
                    setVisibleSections(prev => ({
                        ...prev,
                        [targetId]: true
                    }));

                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        const sections = [
            { ref: inmoLocationRef.current, id: 'inmoLocation' },
            { ref: carouselLocationRef.current, id: 'carouselLocation' },
            { ref: buyHomesRef.current, id: 'buyHomes' },
            { ref: propertiesLandRef.current, id: 'propertiesLand' },
            { ref: valuationRef.current, id: 'valuation' }
        ];

        sections.forEach(section => {
            if (section.ref) {
                section.ref.dataset.sectionId = section.id;
                observer.observe(section.ref);
            }
        });

        return () => {
            sections.forEach(section => {
                if (section.ref) {
                    observer.unobserve(section.ref);
                }
            });
        };
    }, []);

    return (
        <div className="main-landing-container">
            <section ref={welcomeRef} className="welcome-section">
                <Welcome scrollProgress={scrollProgress} />
            </section>
            <section ref={contentRef} className="content-container">
                <div ref={inmoLocationRef} data-section-id="inmoLocation">
                    <InmoLocation visibleSections={visibleSections} />
                </div>
                <div ref={carouselLocationRef} data-section-id="carouselLocation">
                    <CarouselLocation visibleSections={visibleSections} />
                </div>
                <div ref={buyHomesRef} data-section-id="buyHomes">
                    <BuyHomes visibleSections={visibleSections} />
                </div>
                <div ref={propertiesLandRef} data-section-id="propertiesLand">
                    <PropertiesLand visibleSections={visibleSections} />
                </div>
                <div ref={valuationRef} data-section-id="valuation">
                    <Valuation visibleSections={visibleSections} />
                </div>
            </section>
        </div>
    );
}

export default Landing;