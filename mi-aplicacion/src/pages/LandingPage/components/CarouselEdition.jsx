import { useLanguage } from "../../../contexts/LanguageContext";
import './CarouselEdition.css'

function CarouselEdition() {
    const { t, getRoute } = useLanguage();

    return (
        <div className='section-carousel-edition>'>
            <div className="section-carousel-inner">
                <div className="section-carousel-left">
                    <img src="/images/queTal.png" alt="artaza-inmo" />
                </div>

                <div className="section-carousel-right">
                    <div className="photo-little">
                        {/* <img src="/images/faro.png" alt="" /> */}
                    </div>
                    <div className="texts">
                        <h1 dangerouslySetInnerHTML={{ __html: t('artaza') }}></h1>
                        <h3>Te invitamos a descubrir los rincones, paisajes y servicios que hacen de Artaza y Getxo un lugar único para vivir. Porque elegir una casa también es enamorarse del barrio.</h3>
                        <h4>Artaza Inmobiliaria</h4>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CarouselEdition;