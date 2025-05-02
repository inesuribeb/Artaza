import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css'

function Contact() {
    const { language, t } = useLanguage();

    return (
        <div className='contact-wrapper'>
            <div className='welcome-contact'>
                <h1
                    dangerouslySetInnerHTML={{
                        __html: t('welcomeTitle'),
                    }}
                />
            </div>
            <div className='picture-and-text'>
                <div className='contact-picture'>
                    <img src="/images/elipse.jpg" alt="inmobiliaria-artaza-por-dentro" />
                </div>
                <div className='contact-info'>
                    <div>
                        <h4>{t('horario')}</h4>
                        <h5>{t('lunesajueves')}</h5>
                        <p>{t('mananas')} | {t('tardes')}</p>
                        <h5>{t('viernes')}</h5>
                        <p>{t('mananas')}</p>
                    </div>

                    <div>
                        <h4>{t('emailText')}</h4>
                        <p>{t('emailaddress')}</p>
                    </div>

                    <div>
                        <h4>{t('telephoneText')}</h4>
                        <p>{t('telefono')}</p>
                    </div>

                </div>

                <div className='contact-picture'>
                    <img src="/images/detalle.jpg" alt="inmobiliaria-artaza-por-dentro" />
                </div>


            </div>
        </div>
    );
}

export default Contact;