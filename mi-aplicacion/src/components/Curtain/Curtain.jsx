import { useEffect } from 'react';
import './Curtain.css';

function Curtain({ onDone }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onDone) onDone();
        }, 2500); 
        
        return () => clearTimeout(timer);
    }, [onDone]);
    
    return (
        <div className='splash-screen'>
            <img src="/images/LOGO1 BLANCO.png" alt="logo-inmobiliaria-artaza-bienvenida" />
        </div>
    );
}

export default Curtain;