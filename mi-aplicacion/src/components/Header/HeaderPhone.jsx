import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { useHeaderStyle } from "./HeaderStyleContext";
import './HeaderPhone2.css'

const SCROLL_POSITION_KEY = 'artaza_scroll_position';

function HeaderPhone() {
    const { language, toggleLanguage, t, getRoute } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { headerClassName } = useHeaderStyle();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageChange = () => {
        const scrollPosition = window.scrollY;
        localStorage.setItem(SCROLL_POSITION_KEY, scrollPosition.toString());

        localStorage.setItem('is_language_change', 'true');

        toggleLanguage();
    };

    return (
        <>
            <div className="header-phone-container">
                <header className={`header-phone ${headerClassName}`}>
                    <div className="logo-phone">
                        <Link to={getRoute('home')} onClick={isMenuOpen ? toggleMenu : undefined}>
                            {isMenuOpen ? (
                                <img src="/images/LOGO1 BLANCO.png" alt="InmoArtaza Logo" />
                            ) : headerClassName === 'white-section-active' ? (
                                <img src="/images/LOGO1 BLANCO.png" alt="InmoArtaza Logo" />
                            ) : (
                                <img src="/images/LOGO 1.png" alt="InmoArtaza Logo" />
                            )}
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