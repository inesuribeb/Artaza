import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { homes } from '../../utils/Homes';
import { useState, useEffect } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import PropertyHeader from './Components/PropertyHeader';
import PropertyCarousel from './Components/CarouselProperty';
import PropertyInfo from './Components/InfoProperty';
import './IndividualHome.css';

function IndividualHome() {
  const { id } = useParams();
  const { language, t, getRoute } = useLanguage();
  const isMobile = useMediaQuery('(max-width: 480px)');
  const navigate = useNavigate();

  const property = homes.find(home => home.id === id);
  const [filteredIds, setFilteredIds] = useState([]);

  useEffect(() => {
    const storedIds = localStorage.getItem('filteredPropertyIds');
    if (storedIds) {
      setFilteredIds(JSON.parse(storedIds));
    } else {
      setFilteredIds(homes.map(home => home.id));
    }
  }, []);

  const currentIndex = filteredIds.indexOf(id);
  const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredIds.length - 1;
  const nextIndex = currentIndex < filteredIds.length - 1 ? currentIndex + 1 : 0;

  const previousPropertyId = filteredIds[previousIndex];
  const nextPropertyId = filteredIds[nextIndex];

  const goToPreviousProperty = () => {
    navigate(getRoute('property', { id: previousPropertyId }));
  };

  const goToNextProperty = () => {
    navigate(getRoute('property', { id: nextPropertyId }));
  };

  if (!property) {
    return (
      <div className="error-container">
        <h1>{t('propertyNotFound')}</h1>
        <p>{t('propertyNotFoundMessage')}</p>
      </div>
    );
  }

  return (
    <div className="individual-home-wrapper">
      <PropertyHeader 
        property={property} 
        language={language} 
        t={t}
        goToPreviousProperty={goToPreviousProperty}
        goToNextProperty={goToNextProperty}
      />

      <PropertyCarousel 
        property={property} 
        language={language} 
        isMobile={isMobile} 
      />

      <div className='animated-background'></div>

      <PropertyInfo 
        property={property} 
        language={language} 
        t={t} 
      />

      <div className='google-maps-location'></div>
    </div>
  );
}

export default IndividualHome;
