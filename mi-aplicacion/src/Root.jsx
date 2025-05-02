import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header/Header";
import HeaderPhone from "./components/Header/HeaderPhone";
import Footer from "./components/Footer/Footer";
import Curtain from "./components/Curtain/Curtain";
import useMediaQuery from "./hooks/useMediaQuery";
import { HeaderStyleProvider } from "./components/Header/HeaderStyleContext";
import './Root.css'

const SCROLL_POSITION_KEY = 'artaza_scroll_position';

function Root() {
    const location = useLocation();
    const [showCurtain, setShowCurtain] = useState(true);
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        const isLanguageChange = localStorage.getItem('is_language_change') === 'true';

        if (isLanguageChange) {
            const savedScrollPosition = localStorage.getItem(SCROLL_POSITION_KEY);
            if (savedScrollPosition) {
                window.scrollTo(0, parseInt(savedScrollPosition, 10));
            }

            localStorage.removeItem('is_language_change');
            localStorage.removeItem(SCROLL_POSITION_KEY);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    if (showCurtain) {
        return <Curtain onDone={() => setShowCurtain(false)} />;
    }

    return (
        <LanguageProvider>
            <HeaderStyleProvider>
                <div>
                    {isMobile ? <HeaderPhone /> : <Header />}
                    <div className="outlet-container" key={location.pathname}>
                        <Outlet />
                    </div>
                    <div className="footer-root">
                        <Footer />
                    </div>
                </div>
            </HeaderStyleProvider>
        </LanguageProvider>
    );
}

export default Root;