import React, { useEffect, useRef, useState } from 'react';
import Welcome from "./components/Welcome";
import InmoLocation from "./components/InmoLocation";
import CarouselLocation from "./components/CarouselLocation";
import PropertiesLand from "./components/PropertiesLand";
import BuyHomes from "./components/BuyHomes";
import Valuation from '../../components/Valuation/Valuation';
import './Landing.css';

function Landing() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const contentRef = useRef(null);
    
    // Referencias para los elementos que queremos observar
    const inmoLocationRef = useRef(null);
    const carouselLocationRef = useRef(null);
    const buyHomesRef = useRef(null);
    const propertiesLandRef = useRef(null);
    const valuationRef = useRef(null);
    
    // Estados para controlar la visibilidad de cada sección
    const [visibleSections, setVisibleSections] = useState({
        inmoLocation: false,
        carouselLocation: false,
        buyHomes: false,
        propertiesLand: false
    });

    // Efecto para el scroll progress
    useEffect(() => {
        let rafId = null;
        
        const handleScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);
            
            rafId = requestAnimationFrame(() => {
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                const progress = Math.min(scrollY / windowHeight, 1);
                setScrollProgress(progress);
            });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    // Efecto para configurar IntersectionObserver
    useEffect(() => {
        // Configurar el observer
        const observerOptions = {
            threshold: 0.3,  // Se activa cuando el 30% del elemento es visible
            rootMargin: '0px'
        };
        
        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                // Obtener el ID del elemento que está siendo observado
                const targetId = entry.target.dataset.sectionId;
                
                if (entry.isIntersecting && targetId) {
                    // Actualizar el estado para marcar esta sección como visible
                    setVisibleSections(prev => ({
                        ...prev,
                        [targetId]: true
                    }));
                    
                    // Una vez que la sección está visible, podemos dejar de observarla
                    observer.unobserve(entry.target);
                }
            });
        };
        
        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        
        // Observar cada sección si la referencia existe
        const sections = [
            { ref: inmoLocationRef.current, id: 'inmoLocation' },
            { ref: carouselLocationRef.current, id: 'carouselLocation' },
            { ref: buyHomesRef.current, id: 'buyHomes' },
            { ref: propertiesLandRef.current, id: 'propertiesLand' },
            { ref: valuationRef.current, id: 'valuation' }
        ];
        
        sections.forEach(section => {
            if (section.ref) {
                // Añadir un atributo de datos para identificar la sección
                section.ref.dataset.sectionId = section.id;
                observer.observe(section.ref);
            }
        });
        
        // Limpieza al desmontar
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
            <section className="welcome-section">
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