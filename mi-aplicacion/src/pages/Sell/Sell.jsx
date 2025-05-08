import { useEffect, useRef } from 'react';
import SellForm from './components/SellForm';
import { useHeaderStyle } from '../../components/Header/HeaderStyleContext';
import './Sell.css';

function Sell() {
    const { setHeaderClassName } = useHeaderStyle();
    const backgroundRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (backgroundRef.current) {
                const backgroundRect = backgroundRef.current.getBoundingClientRect();
                const headerHeight = 80; 

                if (headerHeight < backgroundRect.bottom) {
                    setHeaderClassName('white-section-active');
                } else {
                    setHeaderClassName('');
                }
            }
        };
        
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            setHeaderClassName('');
        };
    }, [setHeaderClassName]);

    return (
        <div className='sell-wrapper'>
            <div className='sell-page-background' ref={backgroundRef}>
            </div>
            <SellForm />
        </div>
    );
}

export default Sell;

// import { useEffect, useRef, useState } from 'react';
// import SellForm from './components/SellForm';
// import { useHeaderStyle } from '../../components/Header/HeaderStyleContext';
// import './Sell.css';

// function Sell() {
//     const { setHeaderClassName } = useHeaderStyle();
//     const backgroundRef = useRef(null);
//     const formRef = useRef(null);
//     const [scrollPosition, setScrollPosition] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             // Para el cambio de clase del header
//             if (backgroundRef.current) {
//                 const backgroundRect = backgroundRef.current.getBoundingClientRect();
//                 const headerHeight = 80; 

//                 if (headerHeight < backgroundRect.bottom) {
//                     setHeaderClassName('white-section-active');
//                 } else {
//                     setHeaderClassName('');
//                 }
//             }
            
//             // Para el efecto parallax
//             const position = window.pageYOffset;
//             setScrollPosition(position);
//         };
        
//         handleScroll();
        
//         window.addEventListener('scroll', handleScroll);
//         window.addEventListener('resize', handleScroll);
        
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//             window.removeEventListener('resize', handleScroll);
//             setHeaderClassName('');
//         };
//     }, [setHeaderClassName]);

//     return (
//         <div className='sell-wrapper'>
//             <div className='sell-page-background' ref={backgroundRef}>
//                 {/* Puedes agregar contenido aquí si lo necesitas */}
//             </div>
//             <div 
//                 className='sell-form-content' 
//                 ref={formRef}
//                 style={{
//                     transform: `translateY(${-Math.min(scrollPosition * 0.5, 300)}px)`,
//                     marginTop: '-150px' // Ajusta este valor según necesites
//                 }}
//             >
//                 <SellForm />
//             </div>
//         </div>
//     );
// }

// export default Sell;