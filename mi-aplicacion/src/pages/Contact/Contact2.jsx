import { useLanguage } from '../../contexts/LanguageContext';
import { FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';
import Valuation from '../../components/Valuation/Valuation'
import './Contact2.css'

function ContactTwo() {
    const { language, t } = useLanguage();

    return (
        <div className='contact-with-valuation'>
            <div className='contact-two-wrapper'>
                <div className='first-line-contact'>
                    <h1>Contacto</h1>
                </div>
                <div className='second-line-contact'>
                    <div className='contact-two-info'>
                        <div className="contact-section">
                            <h4><FaMapMarkerAlt className="contact-icon" />{t('visit')}</h4>
                            <p>{t('direccion')}</p>
                            <p>{t('localidad')}</p>
                        </div>

                        <div className="contact-section">
                            <h4><FaClock className="contact-icon" />{t('horario')}</h4>
                            <h5>{t('lunesajueves')}</h5>
                            <p>{t('mananas')}</p>
                            <h5>{t('viernes')}</h5>
                            <p>{t('tardes')}</p>
                            <p>{t('viernesTarde')}</p>
                        </div>

                        <div className="contact-section">
                            <h4><FaEnvelope className="contact-icon" />{t('writeus')}</h4>
                            <p>{t('emailaddress')}</p>
                        </div>

                        <div className="contact-section">
                            <h4><FaPhone className="contact-icon" />{t('callus')}</h4>
                            <p>{t('telefono')}</p>
                            <p>{t('telefono2')}</p>
                        </div>
                    </div>

                    <div className='contact-two-picture'>
                        <img src="/images/martaContacto.png" alt="inmobiliaria-artaza-por-dentro" />
                    </div>
                </div>
            </div>

            <Valuation />
        </div>
    )
}

export default ContactTwo;