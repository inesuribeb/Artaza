import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../../contexts/LanguageContext";
import Button from '../../../components/Button/Button';
import './BuyHomes.css'

function BuyHomes() {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className='buyhomes-wrapper'>
            <div className='buyhomes-container'>
                <h1 dangerouslySetInnerHTML={{ __html: t('compratitulo') }}></h1>
                {/* <h3>{t('subtitulo')}</h3> */}
                {/* <button
                    className="button-link"
                    onClick={() => navigate(getRoute('properties'))}
                    dangerouslySetInnerHTML={{ __html: t('botonproperties') }}
                ></button> */}
                <Button 
                        translationKey="botonproperties" 
                        routeName="properties" 
                    />
            </div>
        </div>
    )
}

export default BuyHomes;