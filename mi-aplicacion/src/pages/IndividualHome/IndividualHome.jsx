import { useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { homes } from '../../utils/Homes';
import { useState } from 'react';
import './IndividualHome.css';

function IndividualHome() {
    const { id } = useParams();
    const { language, t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState(0);

    const property = homes.find(home => home.id === id);

    if (!property) {
        return (
            <div className="error-container">
                <h1>{t('propertyNotFound')}</h1>
                <p>{t('propertyNotFoundMessage')}</p>
            </div>
        );
    }

    // Usar las imágenes del objeto o crear un array con la imagen principal
    const propertyImages = property.images || [property.main_image];

    return (
        <div className="individual-home-wrapper">
            <div className='individual-home-maininfo'>
                <h1 dangerouslySetInnerHTML={{ __html: property.title[language] }}></h1>
                <p>{property.location}</p>

                <div className="individual-home-generalinfo">
                    <span>{property.price}</span>
                    <span className='separator-features'>|</span>
                    <span>{property.type[language]}</span>
                    <span className='separator-features'>|</span>
                    <span>{property.built_m2} m²</span>
                    <span className='separator-features'>|</span>
                    <span>{property.bedrooms} {t('bedrooms')}</span>
                    <span className='separator-features'>|</span>
                    <span>{property.bathrooms} {t('bathrooms')}</span>
                </div>
            </div>

            <div className='individual-home-carousel'>
                {/* Imagen principal */}
                <div className="carousel-main-image">
                    <img
                        src={propertyImages[selectedImage]}
                        alt={`${property.title[language]} - ${selectedImage + 1}`}
                    />
                </div>

                {/* Miniaturas de navegación */}
                <div className="carousel-thumbnails">
                    {propertyImages.map((image, index) => (
                        <div
                            key={index}
                            className={`thumbnail-wrapper ${selectedImage === index ? 'active' : ''}`}
                            onClick={() => setSelectedImage(index)}
                        >
                            <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                            />
                            {selectedImage !== index && <div className="thumbnail-overlay" />}
                        </div>
                    ))}
                </div>
            </div>

            <div className='individual-home-totalinfo'>
                {/* Aquí irá el resto de la información */}
                <div className='column-description'>
                    <h3>{t('description')}</h3>
                    <p>{property.exact_location[language]}</p>

                    {/* <p>{property.description[language]}</p> */}
                    <p dangerouslySetInnerHTML={{ __html: property.description[language] }}></p>

                </div>

                <div className='column-extras'>
                    {/* <span>{property.description[language]}</span> */}
                    <h3>{t('extras')}</h3>
                    <ul className="extras-list">
                        {property.terrace && <li>{t('terrace')}</li>}
                        {property.balcony && <li>{t('balcony')}</li>}
                        {property.built_in_wardrobes && <li>{t('builtInWardrobes')}</li>}
                        {property.storage_room && <li>{t('storageRoom')}</li>}
                        {property.garage && <li>{t('garage')}</li>}
                        {property.pool && <li>{t('pool')}</li>}
                        {property.garden && <li>{t('garden')}</li>}
                        {property.private_urbanization && <li>{t('privateUrbanization')}</li>}
                        {property.chimney && <li>{t('chimney')}</li>}
                        {property.txoko && <li>{t('txoko')}</li>}
                        {property.laundry && <li>{t('laundry')}</li>}
                        {property.attic && <li>{t('attic')}</li>}
                        {property.elevator && <li>{t('elevator')}</li>}
                        {property.year_built && <li>{t('yearBuilt')}: {property.year_built}</li>}
                        {property.parcel_m2 && <li>{t('parcelM2')}: {property.parcel_m2} m²</li>}
                    </ul>

                </div>

            </div>

            <div className='contact-suggestion'></div>
        </div>
    );
}

export default IndividualHome;
