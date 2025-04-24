import { useState, useEffect } from 'react';
import './Curtain.css';

function Curtain({ onDone }) {
    useEffect(() => {
        // Configurar un temporizador para llamar a onDone después de la animación
        const timer = setTimeout(() => {
            if (onDone) onDone();
        }, 3000); // 3 segundos, ajusta según necesites
        
        return () => clearTimeout(timer);
    }, [onDone]);
    
    return (
        <div className='splash-screen'>
            <img src="/images/LOGO1 BLANCO.png" alt="logo-inmobiliaria-artaza-bienvenida" />
        </div>
    );
}

export default Curtain;