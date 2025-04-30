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

    const propertyImages = property.images || [property.main_image];

    return (
        <div className="individual-home-wrapper">
            <div className='individual-home-maininfo'>
                <h1 dangerouslySetInnerHTML={{ __html: property.title[language] }}></h1>
                <h3>{property.price}</h3>
                <p>{property.location}</p>
            </div>

            <div className='individual-home-carousel'>
                <div className="carousel-main-image">
                    <img
                        src={propertyImages[selectedImage]}
                        alt={`${property.title[language]} - ${selectedImage + 1}`}
                    />
                </div>

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



            <div className='animated-background'></div>

            {/* AQUIIIIIIIIIIIIII */}

            <div className='total-info-wrapper'>

                <div className='intro'>
                    <div className='general-info'>
                        <div className="general-list">
                            {property.price && (
                                <div className='list-1'>
                                    <h5>{t('price')}</h5>
                                    <p>{property.price}</p>
                                </div>
                            )}

                            {property.exact_location?.[language] && (
                                <div className='list-1'>
                                    <h5>{t('address')}</h5>
                                    <p>{property.exact_location[language]}</p>
                                </div>
                            )}

                            {property.location && (
                                <div className='list-1'>
                                    <h5>{t('location')}</h5>
                                    <p>{property.location}</p>
                                </div>
                            )}
                        </div>


                    </div>


                    <div className='column-description'>
                        <h1 dangerouslySetInnerHTML={{ __html: `${property.description[language]}` }}></h1>
                        {/* <h3>{t('description')}</h3> */}
                        {/* <p dangerouslySetInnerHTML={{ __html: property.description[language] }}></p> */}
                    </div>
                </div>





                <div className='individual-home-totalinfo'>
                    <div className='caracteristicas-info'>
                        <h3>{t('features')}</h3>
                        <div className="caracteristicas-list">
                            {property.type?.[language] && (
                                <div className='list-1-c'>
                                    <h5>{t('homeType')}</h5>
                                    <p>{property.type[language]}</p>
                                </div>
                            )}

                            {property.built_m2 && (
                                <div className='list-1-c'>
                                    <h5>{t('builtM2')}</h5>
                                    <p>{property.built_m2}</p>
                                </div>
                            )}

                            {property.usable_m2 && (
                                <div className='list-1-c'>
                                    <h5>{t('usableM2')}</h5>
                                    <p>{property.usable_m2}</p>
                                </div>
                            )}

                            {property.bedrooms && (
                                <div className='list-1-c'>
                                    <h5>{t('bedrooms')}</h5>
                                    <p>{property.bedrooms}</p>
                                </div>
                            )}

                            {property.bathrooms && (
                                <div className='list-1-c'>
                                    <h5>{t('bathrooms')}</h5>
                                    <p>{property.bathrooms}</p>
                                </div>
                            )}

                            {property.orientation && (
                                <div className='list-1-c'>
                                    <h5>{t('orientation')}</h5>
                                    <p>{property.orientation[language]}</p>
                                </div>
                            )}


                            {property.year_built && (
                                <div>
                                    <h5>{t('yearBuilt')}</h5>
                                    <p>{property.year_built}</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>


                <div>

                    <div className='column-extras'>
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
                        </ul>

                    </div>
                </div>

            </div>

            <div className='contact-suggestion'></div>
        </div>
    );
}

export default IndividualHome;
