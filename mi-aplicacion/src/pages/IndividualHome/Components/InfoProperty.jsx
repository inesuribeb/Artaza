// import { useEffect, useRef } from 'react';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import './InfoProperty2.css'

// function PropertyInfo({ property, language, t }) {

//     return (
//         <div className='total-info-wrapper'>
//             <div className='title-info'>
//                 <h1>
//                     <span className="first-line">{t('aboutThisPropertyFirstLine')}</span>
//                     <br />
//                     <span className="second-line">{t('aboutThisPropertySecondLine')}</span>
//                 </h1>
//             </div>

//             <div className='info-right'>
//                 <div className='intro'>
//                     <div className='general-info'>
//                         <div className="general-list">
//                             {property.price && (
//                                 <div className='list-1'>
//                                     <h5>{t('price')}</h5>
//                                     <p>{property.price}</p>
//                                 </div>
//                             )}

//                             {property.location && (
//                                 <div className='list-1'>
//                                     <h5>{t('location')}</h5>
//                                     <p>{property.location}</p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     <div className='column-description'>
//                         <h1 dangerouslySetInnerHTML={{ __html: `${property.description[language]}` }}></h1>
//                     </div>
//                 </div>

//                 <div className='individual-home-totalinfo'>
//                     <div className='caracteristicas-info'>
//                         <h3>{t('features')} <ExpandMoreIcon /></h3>
//                         <div className="caracteristicas-list">
//                             {property.type?.[language] && (
//                                 <div className='list-1-c'>
//                                     <h5>{t('homeType')}</h5>
//                                     <p>{property.type[language]}</p>
//                                 </div>
//                             )}

//                             {property.built_m2 && (
//                                 <div className='list-1-c'>
//                                     <h5>{t('builtM2')}</h5>
//                                     <p>{property.built_m2}</p>
//                                 </div>
//                             )}

//                             {property.usable_m2 && (
//                                 <div className='list-1-c'>
//                                     <h5>{t('usableM2')}</h5>
//                                     <p>{property.usable_m2}</p>
//                                 </div>
//                             )}

//                             {property.bedrooms && (
//                                 <div className='list-1-c'>
//                                     <h5>{t('bedroomsP')}</h5>
//                                     <p>{property.bedrooms}</p>
//                                 </div>
//                             )}

//                             {property.bathrooms && (
//                                 <div className='list-1-c'>
//                                     <h5>{t('bathrooms')}</h5>
//                                     <p>{property.bathrooms}</p>
//                                 </div>
//                             )}

//                             {property.orientation && (
//                                 <div className='list-1-c'>
//                                     <h5>{t('orientation')}</h5>
//                                     <p>
//                                         {Array.isArray(property.orientation[language])
//                                             ? property.orientation[language].join(" - ")
//                                             : property.orientation[language]
//                                         }
//                                     </p>
//                                 </div>
//                             )}

//                             {property.year_built && (
//                                 <div className='list-1-c'>
//                                     <h5>{t('yearBuilt')}</h5>
//                                     <p>{property.year_built}</p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     <div className='column-extras'>
//                         <h3>{t('extras')} <ExpandMoreIcon /></h3>
//                         <ul className="extras-list">
//                             {property.terrace && <li>{t('terrace')}</li>}
//                             {property.balcony && <li>{t('balcony')}</li>}
//                             {property.built_in_wardrobes && <li>{t('builtInWardrobes')}</li>}
//                             {property.storage_room && <li>{t('storageRoom')}</li>}
//                             {property.garage && <li>{t('garage')}</li>}
//                             {property.pool && <li>{t('pool')}</li>}
//                             {property.garden && <li>{t('garden')}</li>}
//                             {property.private_urbanization && <li>{t('privateUrbanization')}</li>}
//                             {property.chimney && <li>{t('chimney')}</li>}
//                             {property.txoko && <li>{t('txoko')}</li>}
//                             {property.laundry && <li>{t('laundry')}</li>}
//                             {property.attic && <li>{t('attic')}</li>}
//                             {property.elevator && <li>{t('elevator')}</li>}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PropertyInfo;

import { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './InfoProperty2.css'

function PropertyInfo({ property, language, t }) {
    // Estado para controlar qué secciones están expandidas
    const [expandedSections, setExpandedSections] = useState({
        caracteristicas: false,
        extras: false
    });

    // Función para alternar la expansión de una sección
    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className='total-info-wrapper'>
            <div className='title-info'>
                <h1>
                    <span className="first-line">{t('aboutThisPropertyFirstLine')}</span>
                    <br />
                    <span className="second-line">{t('aboutThisPropertySecondLine')}</span>
                </h1>
            </div>

            <div className='info-right'>
                <div className='intro'>
                    <div className='general-info'>
                        <div className="general-list">
                            {property.price && (
                                <div className='list-1'>
                                    <h5>{t('price')}</h5>
                                    <p>{property.price}</p>
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
                    </div>
                </div>

                <div className='individual-home-totalinfo'>
                    <div className='caracteristicas-info'>
                        <div
                            className={`section-header ${expandedSections.caracteristicas ? 'expanded' : ''}`}
                            onClick={() => toggleSection('caracteristicas')}
                        >
                            <h3>{t('features')}</h3>
                            <span className={`icon-wrapper ${expandedSections.caracteristicas ? 'expanded' : ''}`}>
                                <ExpandMoreIcon />
                            </span>
                        </div>

                        <div className={`caracteristicas-list ${expandedSections.caracteristicas ? 'expanded' : ''}`}>
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
                                    <h5>{t('bedroomsP')}</h5>
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
                                    <p>
                                        {Array.isArray(property.orientation[language])
                                            ? property.orientation[language].join(" - ")
                                            : property.orientation[language]
                                        }
                                    </p>
                                </div>
                            )}

                            {property.year_built && (
                                <div className='list-1-c'>
                                    <h5>{t('yearBuilt')}</h5>
                                    <p>{property.year_built}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <div className='column-extras'>
                        <div
                            className={`section-header ${expandedSections.extras ? 'expanded' : ''}`}
                            onClick={() => toggleSection('extras')}
                        >
                            <h3>{t('extras')}</h3>
                            <span className={`icon-wrapper ${expandedSections.extras ? 'expanded' : ''}`}>
                                <ExpandMoreIcon />
                            </span>
                        </div>

                        <ul className={`extras-list ${expandedSections.extras ? 'expanded' : ''}`}>
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
        </div>
    );
}

export default PropertyInfo;