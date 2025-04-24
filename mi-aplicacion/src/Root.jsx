import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Curtain from "./components/Curtain/Curtain";
import './Root.css'

function Root() {
    const location = useLocation();
    const [showCurtain, setShowCurtain] = useState(true);
    
    // Scroll al inicio cuando cambia la ruta
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    // Si estamos mostrando el splash screen, solo renderizamos eso
    if (showCurtain) {
        return <Curtain onDone={() => setShowCurtain(false)} />;
    }
    
    // Una vez terminado el splash screen, mostramos la aplicación normal
    return (
        <LanguageProvider>
            <div>
                <Header />
                <div className="outlet-container">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </LanguageProvider>
    );
}

export default Root;