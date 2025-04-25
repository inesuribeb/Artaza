// import { useState, useEffect } from 'react';
// import './Curtain.css';

// function Curtain({ onDone }) {
//     useEffect(() => {

//         const timer = setTimeout(() => {
//             if (onDone) onDone();
//         }, 3000); 
        
//         return () => clearTimeout(timer);
//     }, [onDone]);
    
//     return (
//         <div className='splash-screen'>
//             <img src="/images/LOGO1 BLANCO.png" alt="logo-inmobiliaria-artaza-bienvenida" />
//         </div>
//     );
// }

// export default Curtain;

// import { useEffect } from 'react';
// import './Curtain.css';

// function Curtain({ onDone }) {
//     useEffect(() => {
//         // Configurar un temporizador para llamar a onDone después de la animación completa
//         const timer = setTimeout(() => {
//             if (onDone) onDone();
//         }, 2000); // 3 segundos para toda la animación
        
//         return () => clearTimeout(timer);
//     }, [onDone]);
    
//     return (
//         <div className='splash-screen'>
//             <img src="/images/LOGO1 BLANCO.png" alt="logo-inmobiliaria-artaza-bienvenida" />
//         </div>
//     );
// }

// export default Curtain;

import { useEffect } from 'react';
import './Curtain.css';

function Curtain({ onDone }) {
    useEffect(() => {
        // Configurar un temporizador para llamar a onDone después de la animación del logo
        const timer = setTimeout(() => {
            if (onDone) onDone();
        }, 2500); // 2.5 segundos para la primera fase
        
        return () => clearTimeout(timer);
    }, [onDone]);
    
    return (
        <div className='splash-screen'>
            <img src="/images/LOGO1 BLANCO.png" alt="logo-inmobiliaria-artaza-bienvenida" />
        </div>
    );
}

export default Curtain;