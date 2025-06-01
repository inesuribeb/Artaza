import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useLanguage } from "../../contexts/LanguageContext";
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Footer.css';

function Footer() {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='footer-all'>
            <div className='footer-image'>
                <div className="logo-icon">
                    <img src="/images/ISOTIPO BLANCO.png" alt="WhatsApp" />
                </div>

                {/* <div className="scroll-to-top-button" onClick={scrollToTop}>
                    <ArrowUpwardIcon />
                </div> */}
                <div className="scroll-to-top-button" onClick={scrollToTop}>

                </div>
            </div>
            <div className="footer-wrapper">
                <div className='footer-content'>

                    <div className="footer-one">
                        <h3>{t('visit')}</h3>
                        <div className='interior-divs'>
                            <p>{t('direccion')}</p>
                            <p>{t('localidad')}</p>
                        </div>
                    </div>

                    {/* <div className="footer-two">
                        <h3>{t('horario')}</h3>
                        <div className='interior-divs'>
                            <p>{t('lunesajueves')}</p>
                            <p>{t('mananas')}</p>
                            <p>{t('viernes')}</p>
                            <p>{t('tardes')}</p>
                            <p>{t('viernesTarde')}</p>
                        </div>
                    </div> */}
                    <div className="footer-two">
                        <h3>{t('horario')}</h3>
                        <h4>{t('fromdays')}</h4>
                        <div className="time-schedule-container">
                            <div className="time-row">
                                <div className="time-label-footer">
                                    <p>{t('lunesajueves')}</p>
                                </div>
                                <div className="time-hours-footer">
                                    <p>{t('mananas')}</p>
                                </div>
                            </div>

                            <div className="time-row">
                                <div className="time-label-footer">
                                    <p>{t('viernes')}</p>
                                </div>
                                <div className="time-hours-footer">
                                    <p>{t('tardes')}</p>
                                    <p>{t('viernesTarde')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-three">
                        <h3>{t('contactus')}</h3>
                        <div className='interior-divs'>
                            <p>{t('telefono')}</p>
                            <p>{t('telefono2')}</p>
                            <p>{t('emailaddress')}</p>
                        </div>
                    </div>

                    <div className="footer-five">
                        <h3>{t('menu')}</h3>
                        <div className='interior-divs'>
                            <p>
                                <Link
                                    to={getRoute('properties')}
                                    className={location.pathname === getRoute('properties') ? 'footer-active-link' : 'footer-link'}
                                >
                                    <span className="footer-link-text">{t('properties')}</span>
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to={getRoute('buy')}
                                    className={location.pathname === getRoute('buy') ? 'footer-active-link' : 'footer-link'}
                                >
                                    <span className="footer-link-text">{t('buy')}</span>
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to={getRoute('sell')}
                                    className={location.pathname === getRoute('sell') ? 'footer-active-link' : 'footer-link'}
                                >
                                    <span className="footer-link-text">{t('sell')}</span>
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to={getRoute('contact')}
                                    className={location.pathname === getRoute('contact') ? 'footer-active-link' : 'footer-link'}
                                >
                                    <span className="footer-link-text">{t('contact')}</span>
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="footer-four">
                        <Link to={getRoute('cookies')}>
                            <h3 className='first-child'>{t('cookies')}</h3>
                        </Link>
                        <Link to={getRoute('privacy')}>
                            <h3>{t('privacy')}</h3>
                        </Link>
                        {/* <Link to={getRoute('home')}>
                            <h3>{t('terms')}</h3>
                        </Link>
                        <Link to={getRoute('home')}>
                            <h3>{t('legal')}</h3>
                        </Link> */}
                    </div>
                </div>
            </div>

            <div className='footer-foot'>
                <h3>{t('madeBy')} <a href="https://inesuribe.es/" target="_blank" rel="noopener noreferrer">Estudio Ines Uribe</a></h3>
                <h3>{t('c')}</h3>
            </div>
        </div>
    );
}


export default Footer;