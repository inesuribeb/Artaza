import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../../contexts/LanguageContext";
import Button from '../../../components/Button/Button';
import './BuyHomes.css'

function BuyHomes({ visibleSections }) {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className={`buyhomes-wrapper ${visibleSections.buyHomes ? 'visible' : ''}`}>
            {/* <div className='buyhomes-wrapper'> */}
                <div className='buyhomes-container'>
                    <h1 dangerouslySetInnerHTML={{ __html: t('compratitulo') }}></h1>
                    <Button
                        translationKey="botonproperties"
                        routeName="properties"
                    />
                </div>
        </div>
    )
}

export default BuyHomes;