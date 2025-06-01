import { useLanguage } from '../../contexts/LanguageContext';
import './Privacidad.css'

function Privacidad() {
    const { t } = useLanguage();
    
    return (
        <div className="privacidad-container">
            <div className="privacidad-content">
                <h1 className="privacidad-title">{t('title')}</h1>
                
                {t('sections').map((section, index) => (
                    <section key={index} className="privacidad-section">
                        <h2 className="section-heading">{section.heading}</h2>
                        <div className="section-content">
                            {section.content.split('\n').map((paragraph, pIndex) => (
                                <p key={pIndex} className="section-paragraph">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>
                ))}
                
                <div className="contact-info">
                    <p className="contact-email">
                        {t('emailaddress')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Privacidad;