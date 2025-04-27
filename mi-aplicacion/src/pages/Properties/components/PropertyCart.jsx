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
            <div className="property-card__image-container">
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
            </div>

            <div className="property-card__info" onClick={handleViewDetails}>
                <h2 className="property-card__title">{title[language]}</h2>

                {/* <h3 className="property-card__price">{price}</h3> */}

                <p className="property-card__location">{location}</p>

                <div className="property-card__features">
                    <span>{price}</span>
                    <span>|</span>
                    <span>{type[language]}</span>
                    <span>|</span>
                    <span>{built_m2} m²</span>
                    <span>|</span>
                    <span>{bedrooms} {t('bedrooms')}</span>
                    <span>|</span>
                    <span>{bathrooms} {t('bathrooms')}</span>
                </div>

            </div>
        </div>
    );
}

export default PropertyCart;