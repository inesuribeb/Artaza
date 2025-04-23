import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import './Footer.css'

function Footer () {
    const { language, toggleLanguage, t, getRoute } = useLanguage();

    return (
        <div className='footer-content'>
            <div className='primera-fila-footer'>
                <nav className={`nav-menu-footer`}>
                    <ul>                        
                        <li>
                            <Link to={getRoute('properties')} >{t('properties')}</Link>
                        </li>
                        <li>
                            <Link to={getRoute('buy')} >{t('buy')}</Link>
                        </li>
                        <li>
                            <Link to={getRoute('sell')} >{t('sell')}</Link>
                        </li>
                        <li>
                            <Link to={getRoute('contact')} >{t('contact')}</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='segunda-fila-footer'>
                <div className="columna-izquierda">
                    <p>(+34) 944 33 17 36</p>
                    <p>650 56 77 12</p>
                </div>
                <div className="columna-derecha">
                    <p>Paseo Landabarri, 48</p>
                    <p>48940 Leioa</p>
                </div>
            </div>

            {/* <div className='tercera-fila-footer'>
                <p>info@inmoartaza.es</p>
            </div> */}

            <div className='cuarta-fila-footer'>
                <h5>De Lunes a Viernes</h5>
                <div className="horarios">
                    <div className="columna-izquierda">
                        <p>10:30 - 13:30</p>
                        <p>Maru Pineda</p>
                    </div>
                    <div className="columna-derecha">
                        <p>17:00 - 20:00</p>
                        <p>info@inmoartaza.es</p>
                    </div>
                </div>
            </div>

            <div className='quinta-fila-footer'>
                <Link to="/home">
                    <img src="/images/ISOTIPO BLANCO.png" alt="InmoArtaza Logo" />
                </Link> 
            </div>
        </div>
    )
}

export default Footer;