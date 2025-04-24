import { useLanguage } from "../../../contexts/LanguageContext";
import './Welcome.css'

function Welcome() {
    const { t, getRoute } = useLanguage();

    return (
        <div className='landing-container'>
            <h1 dangerouslySetInnerHTML={{ __html: t('tituloprincipal') }}></h1>
            <h3>{t('subtitulo')}</h3>
        </div>
    )
}

export default Welcome;