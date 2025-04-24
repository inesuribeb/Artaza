import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import './Header.css'

function Header() {
    const { language, toggleLanguage, t, getRoute } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="header-container">
                {/* <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
                <div className="logo">
                    <Link to="/home">
                        <img src="/images/LOGO 1.png" alt="InmoArtaza Logo" />
                    </Link>
                </div>

                <div className="header-controls">
                    <div className="language-selector">
                        <span
                            className={language === 'es' ? 'active' : ''}
                            onClick={() => language !== 'es' && toggleLanguage()}
                        >
                            ES
                        </span>
                        <span className="divider">|</span>
                        <span
                            className={language === 'en' ? 'active' : ''}
                            onClick={() => language !== 'en' && toggleLanguage()}
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

                <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

                <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
                    <ul>                        
                        <li>
                            <Link to={getRoute('properties')} onClick={toggleMenu}>{t('properties')}</Link>
                        </li>
                        <li>
                            <Link to={getRoute('buy')} onClick={toggleMenu}>{t('buy')}</Link>
                        </li>
                        <li>
                            <Link to={getRoute('sell')} onClick={toggleMenu}>{t('sell')}</Link>
                        </li>
                        <li>
                            <Link to={getRoute('contact')} onClick={toggleMenu}>{t('contact')}</Link>
                        </li>
                    </ul>
                </nav>
            </header> 
            </div>*/}


                <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
                    <div className="logo">
                        <Link to="/home">
                            <img src="/images/LOGO1 BLANCO.png" alt="InmoArtaza Logo" />
                        </Link>
                        {/* <Link to="/home">
                            <img
                                src="/images/LOGO 1.png"
                                alt="InmoArtaza Logo"
                                className="logo-dark"
                            />
                            <img
                                src="/images/LOGO1 BLANCO.png"
                                alt="InmoArtaza Logo"
                                className="logo-light"
                            />
                        </Link> */}
                    </div>

                    <div className="header-controls">
                        <div className="language-selector">
                            <span
                                className={language === 'es' ? 'active' : ''}
                                onClick={() => language !== 'es' && toggleLanguage()}
                            >
                                ES
                            </span>
                            <span className="divider">|</span>
                            <span
                                className={language === 'en' ? 'active' : ''}
                                onClick={() => language !== 'en' && toggleLanguage()}
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

            {/* Overlay y menú fuera del header */}
            <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

            <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
                <ul>
                    {/* <li>
                        <Link to={getRoute('properties')} onClick={toggleMenu}>{t('properties')}</Link>
                    </li>
                    <li>
                        <Link to={getRoute('buy')} onClick={toggleMenu}>{t('buy')}</Link>
                    </li>
                    <li>
                        <Link to={getRoute('sell')} onClick={toggleMenu}>{t('sell')}</Link>
                    </li>
                    <li>
                        <Link to={getRoute('contact')} onClick={toggleMenu}>{t('contact')}</Link>
                    </li> */}
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