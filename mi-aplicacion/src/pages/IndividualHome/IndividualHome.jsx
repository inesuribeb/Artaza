import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { homes } from '../../utils/Homes';
import { TarifaHomes } from '../../utils/TarifaHomes';
import { useState, useEffect } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import PropertyHeader from './Components/PropertyHeader';
import PropertyCarousel from './Components/CarouselProperty';
import PropertyInfo from './Components/InfoProperty';
import MapHome from './Components/MapHome';
import SimilarHome from './Components/SimilarHome';
import Valuation from '../../components/Valuation/Valuation'
import './IndividualHome.css';

function IndividualHome() {
  const { id } = useParams();
  const { language, t, getRoute } = useLanguage();
  const isMobile = useMediaQuery('(max-width: 480px)');
  const navigate = useNavigate();

  // const property = homes.find(home => home.id === id);
  // Combinar ambos arrays para buscar la propiedad
  const allProperties = [...homes, ...TarifaHomes];
  const property = allProperties.find(home => home.id === id);
  const [filteredIds, setFilteredIds] = useState([]);


  // useEffect(() => {
  //   const storedIds = localStorage.getItem('filteredPropertyIds');
  //   if (storedIds) {
  //     setFilteredIds(JSON.parse(storedIds));
  //   } else {
  //     setFilteredIds(homes.map(home => home.id));
  //   }
  // }, []);

  useEffect(() => {
    const storedIds = localStorage.getItem('filteredPropertyIds');
    if (storedIds) {
      setFilteredIds(JSON.parse(storedIds));
    } else {
      setFilteredIds(allProperties.map(home => home.id));
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

      {/* <MapHome
        property={property} 
        language={language} 
        t={t} 
      /> */}

      <SimilarHome
        property={property} 
        language={language} 
        t={t} 
      />

      <Valuation />
    </div>
  );
}

export default IndividualHome;
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useLanguage } from '../../contexts/LanguageContext';
// import { homes } from '../../utils/Homes';
// import { useState, useEffect, useRef } from 'react';
// import useMediaQuery from '../../hooks/useMediaQuery';
// import PropertyHeader from './Components/PropertyHeader';
// import PropertyCarousel from './Components/CarouselProperty';
// import PropertyInfo from './Components/InfoProperty';
// import './IndividualHome.css';

// function IndividualHome() {
//   const { id } = useParams();
//   const { language, t, getRoute } = useLanguage();
//   const isMobile = useMediaQuery('(max-width: 480px)');
//   const isTablet = useMediaQuery('(max-width: 768px) and (min-width: 481px)');
//   const isSmallMobile = useMediaQuery('(max-width: 360px)');
//   const navigate = useNavigate();
  
//   const backgroundRef = useRef(null);
  
//   const property = homes.find(home => home.id === id);
//   const [filteredIds, setFilteredIds] = useState([]);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const storedIds = localStorage.getItem('filteredPropertyIds');
//     if (storedIds) {
//       setFilteredIds(JSON.parse(storedIds));
//     } else {
//       setFilteredIds(homes.map(home => home.id));
//     }
    
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
      
//       if (backgroundRef.current) {
//         let scrollMultiplier, maxDistance;
        
//         if (isSmallMobile) {
//           scrollMultiplier = 1.5;
//           maxDistance = 150;
//         } else if (isMobile) {
//           scrollMultiplier = 1.8;
//           maxDistance = 200;
//         } else if (isTablet) {
//           scrollMultiplier = 2.2;
//           maxDistance = 250;
//         } else {
//           scrollMultiplier = 2.5;
//           maxDistance = 600;
//         }
        
//         const translateY = Math.min(window.scrollY * scrollMultiplier, maxDistance) * -1;
        
//         backgroundRef.current.style.transform = `translateY(${translateY}px)`;
//         backgroundRef.current.style.opacity = Math.max(1 - (window.scrollY * 0.001), 0.3);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); 
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [isMobile, isTablet, isSmallMobile]);

//   const currentIndex = filteredIds.indexOf(id);
//   const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredIds.length - 1;
//   const nextIndex = currentIndex < filteredIds.length - 1 ? currentIndex + 1 : 0;

//   const previousPropertyId = filteredIds[previousIndex];
//   const nextPropertyId = filteredIds[nextIndex];

//   const goToPreviousProperty = () => {
//     navigate(getRoute('property', { id: previousPropertyId }));
//   };

//   const goToNextProperty = () => {
//     navigate(getRoute('property', { id: nextPropertyId }));
//   };

//   if (!property) {
//     return (
//       <div className="error-container">
//         <h1>{t('propertyNotFound')}</h1>
//         <p>{t('propertyNotFoundMessage')}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="individual-home-wrapper">
//       <PropertyHeader 
//         property={property} 
//         language={language} 
//         t={t}
//         goToPreviousProperty={goToPreviousProperty}
//         goToNextProperty={goToNextProperty}
//       />

//       <PropertyCarousel 
//         property={property} 
//         language={language} 
//         isMobile={isMobile} 
//       />

//       <div 
//         className={`animated-background ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''} ${isSmallMobile ? 'small-mobile' : ''}`}
//         ref={backgroundRef}
//       ></div>

//       <PropertyInfo 
//         property={property} 
//         language={language} 
//         t={t} 
//       />

//       <div className='google-maps-location'></div>
//     </div>
//   );
// }

// export default IndividualHome;