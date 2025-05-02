// import SellForm from './components/SellForm';
// import { useHeaderStyle } from '../../components/Header/HeaderStyleContext';
// import './Sell.css'

// function Sell () {
//     const { setHeaderClassName } = useHeaderStyle(); 

//     return (
//         <div className='sell-wrapper'>
//             <div className='sell-page-background'></div>
//             <SellForm />
//         </div>
//     );
// }

// export default Sell;

import { useEffect, useRef } from 'react';
import SellForm from './components/SellForm';
import { useHeaderStyle } from '../../components/Header/HeaderStyleContext';
import './Sell.css';

function Sell() {
    const { setHeaderClassName } = useHeaderStyle();
    const backgroundRef = useRef(null);

    // Efecto para gestionar el estilo del header según la posición de scroll
    useEffect(() => {
        const handleScroll = () => {
            // Verificar si backgroundRef existe y tiene un current
            if (backgroundRef.current) {
                const backgroundRect = backgroundRef.current.getBoundingClientRect();
                const headerHeight = 80; // Altura aproximada del header, ajusta según tu diseño

                // Si la parte inferior del header está por encima de la parte inferior del background
                if (headerHeight < backgroundRect.bottom) {
                    setHeaderClassName('white-section-active');
                } else {
                    setHeaderClassName('');
                }
            }
        };
        
        // Establecer el estilo inicial
        handleScroll();
        
        // Añadir listener de scroll
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        
        // Limpiar al desmontar
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            setHeaderClassName('');
        };
    }, [setHeaderClassName]);

    return (
        <div className='sell-wrapper'>
            <div className='sell-page-background' ref={backgroundRef}>
                {/* <h1>VENDER</h1> */}
            </div>
            <SellForm />
        </div>
    );
}

export default Sell;