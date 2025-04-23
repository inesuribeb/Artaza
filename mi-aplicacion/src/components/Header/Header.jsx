import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import './Header.css'

function Header () {

    const { language, toggleLanguage, t, getRoute } = useLanguage();

    return (
        <div>
            {/* <h1>Header</h1> */}
            <header className="header">
            <div className="logo">
                <Link to="/home">InmoArtaza</Link>
            </div>

            <nav className="nav-menu">
                <ul>
                    <li>
                        <Link to={getRoute('home')}>{t('home')}</Link>
                    </li>
                    <li>
                        <Link to={getRoute('properties')}>{t('properties')}</Link>
                    </li>
                    <li>
                        <Link to={getRoute('buy')}>{t('buy')}</Link>
                    </li>
                    <li>
                        <Link to={getRoute('sell')}>{t('sell')}</Link>
                    </li>
                    <li>
                        <Link to={getRoute('contact')}>{t('contact')}</Link>
                    </li>
                </ul>
            </nav>

            {/* Botón para cambiar el idioma */}
            <button 
                onClick={toggleLanguage} 
                className="language-toggle"
            >
                {language === 'es' ? 'EN' : 'ES'}
            </button>
        </header>
        </div>
    )
}

export default Header;