import { useLanguage } from "../../../contexts/LanguageContext";
import './InmoLocation.css'

function InmoLocation() {
    const { t, getRoute } = useLanguage();

    return (
        <div className='section-inmolocation'>
            <div className="inmolocation-inner">
                <div className="inmolocation-left">
                    <h1 dangerouslySetInnerHTML={{ __html: t('subtitulo2') }}></h1>
                    <h3 dangerouslySetInnerHTML={{ __html: t('textosubtitulo2') }}></h3>
                </div>

                <div className="inmolocation-right">
                    <img src="/images/elipse.jpg" alt="artaza-inmo" />
                </div>
            </div>
            {/* <div className="carousel-location">
                <CarouselLocation />
            </div> */}
        </div>
    )
}

export default InmoLocation;