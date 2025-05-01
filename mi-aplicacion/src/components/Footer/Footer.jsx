import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useLanguage } from "../../contexts/LanguageContext";
import Button from '../Button/Button';
import './Footer.css';

function Footer() {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="footer-wrapper">
            <div className='footer-content'>

                <div className="footer-one">
                    <h3>{t('visit')}</h3>
                    <div className='interior-divs'>
                        <p>{t('direccion')}</p>
                        <p>{t('localidad')}</p>
                    </div>
                </div>

                <div className="footer-two">
                    <h3>{t('horario')}</h3>
                    <div className='interior-divs'>
                        <p>{t('lunesajueves')}</p>
                        <p>{t('mananas')}</p>
                        <p>{t('tardes')}</p>
                        <p>{t('viernes')}</p>
                        <p>{t('mananas')}</p>
                    </div>
                </div>

                <div className="footer-three">
                    <h3>{t('contactus')}</h3>
                    <div className='interior-divs'>
                        <p>{t('telefono')}</p>
                        <p>{t('emailaddress')}</p>
                    </div>
                </div>

                <div className="footer-four">
                    <Link to={getRoute('')}>
                        <h3>{t('cookies')}</h3>
                    </Link>
                    <Link to={getRoute('')}>
                        <h3>{t('privacy')}</h3>
                    </Link>
                    <Link to={getRoute('')}>
                        <h3>{t('terms')}</h3>
                    </Link>
                    <Link to={getRoute('')}>
                        <h3>{t('legal')}</h3>
                    </Link>
                </div>
            </div>



            <div className='footer-image'>
                <h3>{t('c')}</h3>
                <div className="whatsapp-icon">
                    <img src="/images/LOGO1 BLANCO.png" alt="WhatsApp" />
                </div>
            </div>
        </div>
    );
}


export default Footer;