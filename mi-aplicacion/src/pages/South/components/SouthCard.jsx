import { useNavigate } from 'react-router-dom';
import './SouthCard.css'

function SouthCard({ home, t, language, getRoute, isEven }) {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        const baseRoute = getRoute('property');
        navigate(`${baseRoute}/${home.id}`);
    };

    return (
        <div className={`south-card ${isEven ? 'image-left' : 'image-right'}`}>
            <div className='tarifa-img'>
                <img
                    src={home.main_image || home.images[0] || '/placeholder-house.jpg'}
                    alt={home.title[language]}
                />
            </div>
            <div className='tarifa-info'>
                <div>
                    <h1>{home.exact_location[language]}</h1>
                    <h2>{home.title[language]}</h2>
                    <div className="info-features">
                        <span>{home.type[language]}</span>
                        <span className='separator-features'>|</span>
                        <span>{home.built_m2} m²</span>
                        <span className='separator-features'>|</span>
                        <span>{home.bedrooms} {t('bedroomspc')}</span>
                        <span className='separator-features'>|</span>
                        <span>{home.bathrooms} {t('bathrooms')}</span>
                    </div>
                    <p className='price'>{home.price}</p>
                </div>
                <div>
                    <button onClick={handleViewDetails}>{t('viewDetails')}</button>
                </div>
            </div>
        </div>
    )
}

export default SouthCard;