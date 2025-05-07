import { useLanguage } from '../../contexts/LanguageContext';
import './Contact2.css'

function ContactTwo() {
    const { language, t } = useLanguage();

    return (
        <div className='contact-two-wrapper'>
            <div className='first-line-contact'>
                <h1>Contacto</h1>
            </div>
            <div className='second-line-contact'>
                <div className='contact-two-info'>
                    <div>
                        <h4>{t('visit')}</h4>
                        <p>{t('direccion')}</p>
                        <p>{t('localidad')}</p>
                    </div>

                    <div>
                        <h4>{t('horario')}</h4>
                        <h5>{t('lunesajueves')}</h5>
                        <p>{t('mananas')}</p>
                        <h5>{t('viernes')}</h5>
                        <p>{t('tardes')}</p>
                        <p>{t('viernesTarde')}</p>
                    </div>

                    <div>
                        <h4>{t('writeus')}</h4>
                        <p>{t('emailaddress')}</p>
                    </div>

                    <div>
                        <h4>{t('callus')}</h4>
                        <p>{t('telefono')}</p>
                        <p>{t('telefono2')}</p>
                    </div>
                </div>

                <div className='contact-two-picture'>
                    <img src="/images/inmo1.png" alt="inmobiliaria-artaza-por-dentro" />
                </div>
            </div>
        </div>
    )
}

export default ContactTwo;