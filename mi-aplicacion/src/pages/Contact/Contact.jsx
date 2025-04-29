import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css'

function Contact() {
    const { language, t } = useLanguage();

    return (
        <div className='contact-wrapper'>
            <div className='picture-and-text'>
                <div className='contact-picture'>
                    <img src="/images/elipse.jpg" alt="inmobiliaria-artaza-por-dentro" />
                </div>
                <div className='contact-info'>
                    <h1>{t('contactus')}</h1>
                    <div>
                        <p>{t('direccion')}</p>
                        <p>{t('localidad')}</p>
                    </div>

                    <div>
                        <h5>{t('horario')}</h5>
                        <p>{t('lunesajueves')}</p>
                        <p>{t('mananas')} | {t('tardes')}</p>
                        <p>{t('viernes')}</p>
                        <p>{t('mananas')}</p>
                    </div>

                    <div>
                        <h5>{t('emailText')}</h5>
                        <p>{t('email')}</p>
                    </div>

                    <div>
                        <h5>{t('telephoneText')}</h5>
                        <p>{t('telefono')}</p>
                    </div>

                </div>
                

            </div>
        </div>
    );
}

export default Contact;