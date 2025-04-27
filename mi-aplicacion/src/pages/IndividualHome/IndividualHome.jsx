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
            </div>

            <div className='contact-suggestion'></div>
        </div>
    );
}

export default IndividualHome;
