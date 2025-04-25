// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Outlet } from "react-router-dom";
// import { LanguageProvider } from "./contexts/LanguageContext";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Curtain from "./components/Curtain/Curtain";
// import './Root.css'

// function Root() {
//     const location = useLocation();
//     const [showCurtain, setShowCurtain] = useState(true);
    
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [location]);
    
//     if (showCurtain) {
//         return <Curtain onDone={() => setShowCurtain(false)} />;
//     }
    
//     return (
//         <LanguageProvider>
//             <div>
//                 <Header />
//                 <div className="outlet-container" key={location.pathname}>
//                     <Outlet />
//                 </div>
//                 <Footer />
//             </div>
//         </LanguageProvider>
//     );
// }

// export default Root;


import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Curtain from "./components/Curtain/Curtain";
import './Root.css'

// Clave para almacenar y recuperar la posición de scroll
const SCROLL_POSITION_KEY = 'artaza_scroll_position';

function Root() {
    const location = useLocation();
    const [showCurtain, setShowCurtain] = useState(true);
    
    useEffect(() => {
        // Comprobar si es un cambio de idioma
        const isLanguageChange = localStorage.getItem('is_language_change') === 'true';
        
        if (isLanguageChange) {
            // Si es un cambio de idioma, restaurar la posición de scroll guardada
            const savedScrollPosition = localStorage.getItem(SCROLL_POSITION_KEY);
            if (savedScrollPosition) {
                window.scrollTo(0, parseInt(savedScrollPosition, 10));
            }
            
            // Limpiar las banderas
            localStorage.removeItem('is_language_change');
            localStorage.removeItem(SCROLL_POSITION_KEY);
        } else {
            // Si no es un cambio de idioma, hacer scroll al inicio
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);
    
    if (showCurtain) {
        return <Curtain onDone={() => setShowCurtain(false)} />;
    }
    
    return (
        <LanguageProvider>
            <div>
                <Header />
                <div className="outlet-container" key={location.pathname}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default Root;