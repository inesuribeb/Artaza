import { useLanguage } from '../../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import './PropertyCart.css';

function PropertyCart({ property }) {
    const { t, getRoute, language } = useLanguage();
    const navigate = useNavigate();

    // Destructuramos las propiedades necesarias
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
        title
    } = property;

    const handleViewDetails = () => {
        const baseRoute = getRoute('property');
        navigate(`${baseRoute}/${id}`);
    };

    return (
        <div className="property-card">
            {/* <div className="property-card__image-container">
                {main_image ? (
                    <img
                        src={main_image}
                        alt={type[language]}
                        className="property-card__image"
                    />
                ) : (
                    <div className="property-card__image-placeholder">
                        <span>{t('noImageAvailable')}</span>
                    </div>
                )}

                {sold && (
                    <div className="property-card__sold-badge">
                        {t('sold')}
                    </div>
                )}
            </div> */}

            <div className="property-card__image-container">
                <div className="property-card__image-frame">
                    {main_image ? (
                        <img
                            src={main_image}
                            alt={type[language]}
                            className="property-card__image"
                        />
                    ) : (
                        <div className="property-card__image-placeholder">
                            <span>{t('noImageAvailable')}</span>
                        </div>
                    )}
                </div>
                {sold && (
                    <div className="property-card__sold-badge">
                        {t('sold')}
                    </div>
                )}
            </div>

            <div className="property-card__info" onClick={handleViewDetails}>
                <p className="property-card__location">{location}</p>

                {/* <h2 className="property-card__title">{title[language]}</h2> */}
                <h2
                    className="property-card__title"
                    dangerouslySetInnerHTML={{ __html: title[language] }}
                ></h2>


                <div className="property-card__features">
                    <span>{price}</span>
                    <span className='separator-features'>|</span>
                    <span>{type[language]}</span>
                    <span className='separator-features'>|</span>
                    <span>{built_m2} m²</span>
                    <span className='separator-features'>|</span>
                    <span>{bedrooms} {t('bedrooms')}</span>
                    <span className='separator-features'>|</span>
                    <span>{bathrooms} {t('bathrooms')}</span>
                </div>

            </div>
        </div>
    );
}

export default PropertyCart;