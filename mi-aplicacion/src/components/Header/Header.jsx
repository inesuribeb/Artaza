import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import './Header.css'

function Header () {
    const { language, toggleLanguage, t, getRoute } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // <div>
        //     <header className="header">
        //     <div className="logo">
        //         <Link to="/home">
        //             <img src="/images/LOGO 1.png" alt="InmoArtaza Logo" />
        //         </Link>            
        //     </div>


        //     <button 
        //         onClick={toggleLanguage} 
        //         className="language-toggle"
        //     >
        //         {language === 'es' ? 'EN' : 'ES'}
        //     </button>

        //     <button
        //             onClick={toggleMenu}
        //             className={`hamburger-button ${isMenuOpen ? 'active' : ''}`}
        //             aria-label="Toggle menu"
        //         >
        //             <span className="hamburger-line top"></span>
        //             <span className="hamburger-line middle"></span>
        //             <span className="hamburger-line bottom"></span>
        //         </button>

        //         <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
        //             <ul>
        //                 <li>
        //                     <Link to={getRoute('home')} onClick={toggleMenu}>{t('home')}</Link>
        //                 </li>
        //                 <li>
        //                     <Link to={getRoute('properties')} onClick={toggleMenu}>{t('properties')}</Link>
        //                 </li>
        //                 <li>
        //                     <Link to={getRoute('buy')} onClick={toggleMenu}>{t('buy')}</Link>
        //                 </li>
        //                 <li>
        //                     <Link to={getRoute('sell')} onClick={toggleMenu}>{t('sell')}</Link>
        //                 </li>
        //                 <li>
        //                     <Link to={getRoute('contact')} onClick={toggleMenu}>{t('contact')}</Link>
        //                 </li>
        //             </ul>
        //         </nav>



        // </header>
        // </div>

        <div>
            {/* <header className="header">
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

                <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
                    <ul>
                        <li>
                            <Link to={getRoute('home')} onClick={toggleMenu}>{t('home')}</Link>
                        </li>
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
            </header> */}

<header className="header">
                <div className="logo">
                    <Link to="/home">
                        <img src="/images/LOGO 1.png" alt="InmoArtaza Logo" />
                    </Link>            
                </div>

                <div className="header-controls">
                    {/* Selector de idioma tipo ES | EN */}
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

                    {/* Botón hamburguesa */}
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

                {/* Overlay que oscurece el fondo cuando el menú está abierto */}
                <div className={`menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>

                {/* Menú de navegación vertical a la derecha */}
                <nav className={`nav-menu ${isMenuOpen ? 'show' : ''}`}>
                    <ul>
                        <li>
                            <Link to={getRoute('home')} onClick={toggleMenu}>{t('home')}</Link>
                        </li>
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
        </div>
    )
}

export default Header;