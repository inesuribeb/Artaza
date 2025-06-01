import { useLanguage } from '../../contexts/LanguageContext';
import './Cookies.css'

function Cookies() {
    const { t } = useLanguage();
    
    return (
        <div className="cookies-container">
            <div className="cookies-content">
                <h1 className="cookies-title">{t('titleCookies')}</h1>
                
                <div className="cookies-intro">
                    <p className="intro-paragraph">{t('introCookies')}</p>
                </div>

                <section className="cookies-section">
                    <h2 className="section-heading">{t('whatAreCookies').titleCookies}</h2>
                    <div className="section-content">
                        <p className="section-paragraph">{t('whatAreCookies').contentCookies}</p>
                    </div>
                </section>

                <section className="cookies-section">
                    <h2 className="section-heading">{t('typesOfCookies').titleCookies}</h2>
                    <div className="section-content">
                        <div className="cookies-list">
                            {t('typesOfCookies').listCookies.map((cookie, index) => (
                                <div key={index} className="cookie-type">
                                    <h4 className="cookie-type-title">{cookie.typeCookies}</h4>
                                    <p className="cookie-description">{cookie.descriptionCookies}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cookies-section">
                    <h2 className="section-heading">{t('management').titleCookies}</h2>
                    <div className="section-content">
                        <p className="section-paragraph">{t('management').contentCookies}</p>
                        <ul className="browsers-list">
                            {t('management').browsers.map((browser, index) => (
                                <li key={index}>{browser}</li>
                            ))}
                        </ul>
                        <p className="management-note">{t('management').note}</p>
                    </div>
                </section>

                <section className="cookies-section">
                    <h2 className="section-heading">{t('consent').titleCookies}</h2>
                    <div className="section-content">
                        <p className="section-paragraph">{t('consent').contentCookies}</p>
                    </div>
                </section>

                <section className="cookies-section">
                    <h2 className="section-heading">{t('updates').titleCookies}</h2>
                    <div className="section-content">
                        <p className="section-paragraph">{t('updates').contentCookies}</p>
                    </div>
                </section>
                
                <div className="contact-info">
                    <p className="contact-paragraph">{t('contactCookies')}</p>
                    <p className="contact-email">
                        {t('emailaddress')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cookies;