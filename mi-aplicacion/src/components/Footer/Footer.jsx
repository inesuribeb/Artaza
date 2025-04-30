import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../contexts/LanguageContext";
import Button from '../Button/Button';
import './Footer.css';

function Footer() {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className="footer-wrapper">
            <div className='footer-content'>
                <div className="footer-left">
                    <div>
                        <h3>{t('nombreempresa')}</h3>
                        <p>{t('direccion')}</p>
                    </div>
                    <div>
                        <p>{t('localidad')}</p>
                        <p>{t('telefono')}</p>
                    </div>
                    <div>
                        <p>{t('emailaddress')}</p>
                    </div>
                </div>

                <div className="footer-center">
                    <h2>{t('tasaciontitulo')}</h2>
                    <p>{t('tasaciontexto')}</p>
                    <Button
                        translationKey="registrate"
                        routeName="sell"
                    />
                </div>

                <div className="footer-right">
                    <h3>{t('horario')}</h3>
                    <div>
                        <p>{t('lunesajueves')}</p>
                        <p>{t('mananas')}</p>
                        <p>{t('tardes')}</p>
                    </div>
                    <div>
                        <p>{t('viernes')}</p>
                        <p>{t('mananas')}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="whatsapp-icon">
                    <img src="/images/ISOTIPO BLANCO.png" alt="WhatsApp" />
                </div>
            </div>
        </div>
    );
}


export default Footer;