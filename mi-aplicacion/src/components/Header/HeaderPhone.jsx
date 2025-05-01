import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import './HeaderPhone.css'

// Clave para almacenar y recuperar la posición de scroll
const SCROLL_POSITION_KEY = 'artaza_scroll_position';

function HeaderPhone() {
    const { language, toggleLanguage, t, getRoute } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Función para cambiar idioma sin parpadeo
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
            <div className="header-phone-container">
                <header className="header-phone">
                    <div className="logo-phone">
                        <Link to={getRoute('home')}>
                            <img src="/images/LOGO1 BLANCO.png" alt="InmoArtaza Logo" />
                        </Link>
                    </div>

                    <div className="header-phone-controls">
                        <button
                            onClick={toggleMenu}
                            className={`hamburger-phone-button ${isMenuOpen ? 'active' : ''}`}
                            aria-label="Toggle menu"
                        >
                            <span className="hamburger-phone-line top"></span>
                            <span className="hamburger-phone-line middle"></span>
                            <span className="hamburger-phone-line bottom"></span>
                        </button>
                    </div>
                </header>
            </div>

            <div className={`menu-phone-overlay ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

            <nav className={`nav-phone-menu ${isMenuOpen ? 'show' : ''}`}>
                <ul className="nav-phone-list">
                    <li className="nav-phone-item">
                        <Link to={getRoute('properties')} onClick={toggleMenu} className="nav-phone-link">
                            <span className="nav-phone-text">{t('properties')}</span>
                        </Link>
                    </li>
                    <li className="nav-phone-item">
                        <Link to={getRoute('buy')} onClick={toggleMenu} className="nav-phone-link">
                            <span className="nav-phone-text">{t('buy')}</span>
                        </Link>
                    </li>
                    <li className="nav-phone-item">
                        <Link to={getRoute('sell')} onClick={toggleMenu} className="nav-phone-link">
                            <span className="nav-phone-text">{t('sell')}</span>
                        </Link>
                    </li>
                    <li className="nav-phone-item">
                        <Link to={getRoute('contact')} onClick={toggleMenu} className="nav-phone-link">
                            <span className="nav-phone-text">{t('contact')}</span>
                        </Link>
                    </li>
                </ul>

                <div className="language-phone-selector">
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

                <div className="mini-phone-logo">
                    <Link to={getRoute('home')}>
                        <img src="/images/ISOTIPO BLANCO.png" alt="mini-logo-artaza-inmo" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default HeaderPhone;