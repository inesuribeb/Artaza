import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { useHeaderStyle } from "./HeaderStyleContext";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './Header2.css'

const SCROLL_POSITION_KEY = 'artaza_scroll_position';

function Header({ className }) {
    const { language, toggleLanguage, t, getRoute } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { headerClassName } = useHeaderStyle();
    const [isHovering, setIsHovering] = useState(false); // Estado para controlar el hover


    const isHomePage = location.pathname === '/inicio' || location.pathname === '/home' || location.pathname === '/';
    const isPropertiesPage = location.pathname === '/properties' || location.pathname === '/propiedades';
    const isSellPage = location.pathname === '/sell' || location.pathname === '/vender';




    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    const handleLanguageChange = () => {
        const scrollPosition = window.scrollY;
        localStorage.setItem(SCROLL_POSITION_KEY, scrollPosition.toString());

        localStorage.setItem('is_language_change', 'true');

        toggleLanguage();
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <>
            <div className="header-container">
                <header 
                className={`header ${isMenuOpen ? 'menu-open' : ''} ${!isHomePage && !isPropertiesPage && !isSellPage ? 'force-light' : ''} ${headerClassName}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    {/* <div className="logo">
                        <Link to={getRoute('home')} onClick={isMenuOpen ? toggleMenu : undefined}>
                            {headerClassName === 'white-section-active' ? (
                                <img src="/images/LOGO1 BLANCO.png" alt="InmoArtaza Logo" />
                            ) : (
                                <img src="/images/LOGO 1.png" alt="InmoArtaza Logo" />
                            )}
                        </Link>
                    </div> */}
                    <div className="logo">
                        <Link to={getRoute('home')} onClick={isMenuOpen ? toggleMenu : undefined}>
                            {/* Lógica para mostrar el logo correcto */}
                            {isMenuOpen || isHovering ? (
                                <img src="/images/LOGO 1.png" alt="InmoArtaza Logo" />
                            ) : headerClassName === 'white-section-active' ? (
                                <img src="/images/LOGO1 BLANCO.png" alt="InmoArtaza Logo" />
                            ) : (
                                <img src="/images/LOGO 1.png" alt="InmoArtaza Logo" />
                            )}
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
                    <Link to={getRoute('home')}>
                        <img src="/images/ISOTIPO.png" alt="mini-logo-artaza-inmo" />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header;