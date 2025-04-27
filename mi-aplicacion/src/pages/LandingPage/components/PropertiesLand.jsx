import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../../contexts/LanguageContext";
import Button from '../../../components/Button/Button';
import './PropertiesLand.css'

function PropertiesLand() {
    const { t, getRoute } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className='section-propertiesland'>
            <div className="propertiesland-inner">
                <div className="propertiesland-left">
                    <img src="/images/elipse.jpg" alt="artaza-inmo" />
                </div>

                <div className="propertiesland-right">
                    <h1 dangerouslySetInnerHTML={{ __html: t('propiedadesLand') }}></h1>
                    <h3 dangerouslySetInnerHTML={{ __html: t('textopropiedadesLand') }}></h3>
                    <Button 
                        translationKey="botonproperties2" 
                        routeName="buy" 
                    />
                </div>
            </div>
        </div>
    )
}

export default PropertiesLand;