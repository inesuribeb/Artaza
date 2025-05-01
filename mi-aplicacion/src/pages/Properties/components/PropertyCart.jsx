// import { useLanguage } from '../../../contexts/LanguageContext';
// import { useNavigate } from 'react-router-dom';
// import Button from '../../../components/Button/Button';
// import './PropertyCart.css';

// function PropertyCart({ property }) {
//     const { t, getRoute, language } = useLanguage();
//     const navigate = useNavigate();

//     const {
//         main_image,
//         price,
//         location,
//         type,
//         built_m2,
//         bedrooms,
//         bathrooms,
//         id,
//         sold,
//     } = property;

//     const handleViewDetails = () => {
//         const baseRoute = getRoute('property');
//         navigate(`${baseRoute}/${id}`);
//     };

//     return (
//         <div className="property-card">

//             <div className="property-card__image-container">
//                 <div className="property-card__image-frame" onClick={handleViewDetails}>
//                     {main_image ? (
//                         <>
//                             <img
//                                 src={main_image}
//                                 alt={type[language]}
//                                 className="property-card__image"
//                             />
//                             <div className="property-card__overlay">
//                                 <span className="property-card__view-details">{t('viewDetails')}</span>
//                             </div>
//                         </>
//                     ) : (
//                         <div className="property-card__image-placeholder">
//                             <span>{t('noImageAvailable')}</span>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <div className="property-card__info" >
//                 <p className="property-card__location">{location}</p>

//                 <div className="property-card__features">
//                     <span>{price}</span>
//                     <span className='separator-features'>|</span>
//                     <span>{type[language]}</span>
//                     <span className='separator-features'>|</span>
//                     <span>{built_m2} m²</span>
//                     <span className='separator-features'>|</span>
//                     <span>{bedrooms} {t('bedroomspc')}</span>
//                     <span className='separator-features'>|</span>
//                     <span>{bathrooms} {t('bathrooms')}</span>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default PropertyCart;


import { useLanguage } from '../../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import './PropertyCart.css';

function PropertyCart({ property }) {
    const { t, getRoute, language } = useLanguage();
    const navigate = useNavigate();

    const {
        main_image,
        price,
        location,
        type,
        built_m2,
        bedrooms,
        bathrooms,
        id,
        sold,
    } = property;

    const handleViewDetails = () => {
        const baseRoute = getRoute('property');
        navigate(`${baseRoute}/${id}`);
    };

    return (
        <div className="property-card">
            <div className="property-card__image-container">
                <div className="property-card__image-frame" onClick={handleViewDetails}>
                    {main_image ? (
                        <>
                            <img
                                src={main_image}
                                alt={type[language]}
                                className="property-card__image"
                            />
                            <div className="property-card__overlay">
                                <span className="property-card__view-details">{t('viewDetails')}</span>
                            </div>
                        </>
                    ) : (
                        <div className="property-card__image-placeholder">
                            <span>{t('noImageAvailable')}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="property-card__info" >
                {/* <div className="property-card__location-container">
                    <p className="property-card__location">{location}</p>
                    {sold && (
                        <span className="property-card__sold-indicator">
                            {t('sold')}
                        </span>
                    )}
                </div> */}
                <div className="property-card__location-container">
                    <p className="property-card__location">{location}</p>
                    {sold && (
                        <span className="property-card__sold-indicator">
                            {t('sold')}
                        </span>
                    )}
                </div>

                <div className="property-card__features">
                    <span>{price}</span>
                    <span className='separator-features'>|</span>
                    <span>{type[language]}</span>
                    <span className='separator-features'>|</span>
                    <span>{built_m2} m²</span>
                    <span className='separator-features'>|</span>
                    <span>{bedrooms} {t('bedroomspc')}</span>
                    <span className='separator-features'>|</span>
                    <span>{bathrooms} {t('bathrooms')}</span>
                </div>
            </div>
        </div>
    );
}

export default PropertyCart;