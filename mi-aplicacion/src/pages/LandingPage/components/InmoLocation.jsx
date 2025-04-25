import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../../contexts/LanguageContext";
import './InmoLocation.css'

function InmoLocation() {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className='section-inmolocation'>
            <div className="inmolocation-inner">
                <div className="inmolocation-left">
                    <h1 dangerouslySetInnerHTML={{ __html: t('subtitulo2') }}></h1>
                    <h3 dangerouslySetInnerHTML={{ __html: t('textosubtitulo2') }}></h3>
                    <button
                        className="button-link"
                        onClick={() => navigate(getRoute('contact'))}
                        dangerouslySetInnerHTML={{ __html: t('botonquienessomos') }}
                    ></button>
                </div>

                <div className="inmolocation-right">
                    <img src="/images/capturaPrueba.png" alt="artaza-inmo" />
                </div>
            </div>
            <div className="carousel-location">
                <h3>{t('artaza')}</h3>
            </div>
        </div>
    )
}

export default InmoLocation;