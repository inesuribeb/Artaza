import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../../contexts/LanguageContext";
import Button from '../../../components/Button/Button';
import './PropertiesLand.css'

// function PropertiesLand() {
//     const { t, getRoute } = useLanguage();
//     const navigate = useNavigate();

//     return (
//         <div className='section-propertiesland'>
//             <div className="propertiesland-inner">
//                 <div className="propertiesland-left">
//                     <h1 dangerouslySetInnerHTML={{ __html: t('subtitulo2') }}></h1>
//                     <h3 dangerouslySetInnerHTML={{ __html: t('textosubtitulo2') }}></h3>
//                     <button
//                         className="button-link"
//                         onClick={() => navigate(getRoute('contact'))}
//                         dangerouslySetInnerHTML={{ __html: t('botonquienessomos') }}
//                     ></button>
//                 </div>

//                 <div className="propertiesland-right">
//                     <img src="/images/capturaPrueba.png" alt="artaza-inmo" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PropertiesLand;

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
                    
                    {/* <button
                        className="button-link"
                        onClick={() => navigate(getRoute('buy'))}
                        dangerouslySetInnerHTML={{ __html: t('botonproperties2') }}
                    ></button> */}
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