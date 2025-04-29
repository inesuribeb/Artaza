import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './Header.css'

// Clave para almacenar y recuperar la posición de scroll
const SCROLL_POSITION_KEY = 'artaza_scroll_position';

function Header() {
    const { language, toggleLanguage, t, getRoute } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === '/inicio' || location.pathname === '/home' || location.pathname === '/';
    const isPropertiesPage = location.pathname === '/properties' || location.pathname === '/propiedades';

        // Añade este useEffect para controlar el scroll
        useEffect(() => {
            if (isMenuOpen) {
                // Deshabilitar scroll cuando el menú está abierto
                document.body.style.overflow = 'hidden';
                document.body.style.height = '100%';
                document.body.style.position = 'fixed';
                document.body.style.width = '100%';
            } else {
                // Restaurar scroll cuando el menú está cerrado
                document.body.style.overflow = '';
                document.body.style.height = '';
                document.body.style.position = '';
                document.body.style.width = '';
            }
            // Limpiar al desmontar
            return () => {
                document.body.style.overflow = '';
                document.body.style.height = '';
                document.body.style.position = '';
                document.body.style.width = '';
            }
        }, [isMenuOpen]);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    // Función mejorada para cambiar idioma sin parpadeo
    const handleLanguageChange = () => {
        // Guardar la posición actual del scroll en localStorage
        const scrollPosition = window.scrollY;
        localStorage.setItem(SCROLL_POSITION_KEY, scrollPosition.toString());
        
        // Indicar que este es un cambio de idioma y no un cambio de página
        localStorage.setItem('is_language_change', 'true');
        
        // Cambiar el idioma (esto causará navegación)
        toggleLanguage();
    };

    return (
        <>
            <div className="header-container">

                {/* <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}> */}
                <header className={`header ${isMenuOpen ? 'menu-open' : ''} ${!isHomePage && !isPropertiesPage ? 'force-light' : ''}`}>

                    <div className="logo">
                        <Link to={getRoute('home')}>
                            <img src="/images/LOGO1 BLANCO.png" alt="InmoArtaza Logo" />
                        </Link>
                    </div>

                    <div className="header-controls">
                        <div className="language-selector">
                            <span
                                className={language === 'es' ? 'active' : ''}
                                onClick={() => language !== 'es' && handleLanguageChange()}
                            >
                                ES
                            </span>
                            <span className="divider">|</span>
                            <span
                                className={language === 'en' ? 'active' : ''}
                                onClick={() => language !== 'en' && handleLanguageChange()}
                            >
                                EN
                            </span>
                        </div>

                        <button
                            onClick={toggleMenu}
                            className={`hamburger-button ${isMenuOpen ? 'active' : ''}`}
                            aria-label="Toggle menu"
                        >
                            <span className="hamburger-line top"></span>
                            <span className="hamburger-line middle"></span>
                            <span className="hamburger-line bottom"></span>
                        </button>
                    </div>
                </header>
            </div>

            {/* Resto del código igual que antes */}
            <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

            <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
                <ul>
                    <li>
                        <Link to={getRoute('properties')} onClick={toggleMenu}>
                            <div className="nav-link-container">
                                <KeyboardArrowLeftIcon className="nav-arrow" />
                                <span className="nav-text">{t('properties')}</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={getRoute('buy')} onClick={toggleMenu}>
                            <div className="nav-link-container">
                                <KeyboardArrowLeftIcon className="nav-arrow" />
                                <span className="nav-text">{t('buy')}</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={getRoute('sell')} onClick={toggleMenu}>
                            <div className="nav-link-container">
                                <KeyboardArrowLeftIcon className="nav-arrow" />
                                <span className="nav-text">{t('sell')}</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={getRoute('contact')} onClick={toggleMenu}>
                            <div className="nav-link-container">
                                <KeyboardArrowLeftIcon className="nav-arrow" />
                                <span className="nav-text">{t('contact')}</span>
                            </div>
                        </Link>
                    </li>
                </ul>

                <div className="mini-logo">
                    <img src="/images/ISOTIPO.png" alt="mini-logo-artaza-inmo" />
                </div>
            </nav>
        </>
    )
}

export default Header;