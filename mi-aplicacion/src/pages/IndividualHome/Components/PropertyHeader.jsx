import WestIcon from '@mui/icons-material/West';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EastIcon from '@mui/icons-material/East';
import './PropertyHeader.css'

function PropertyHeader({ property, language, t, goToPreviousProperty, goToNextProperty }) {
  return (
    <div className='individual-home-maininfo'>
      <h1 dangerouslySetInnerHTML={{ __html: property.title[language] }}></h1>
      {/* <h3>{property.price}</h3> */}
      {property.sold ? (
        <h3 className="sold-indicator">{t('sold')}</h3>
      ) : (
        <h3>{property.price}</h3>
      )}
      <p>{property.location}</p>

      <div className="navigation-buttons">
        <button
          className="navigation-button prev"
          onClick={goToPreviousProperty}
          aria-label={t('previousProperty')}
        >
          <ArrowBackIcon /> {t('previousProperty')}
        </button>
        <button
          className="navigation-button next"
          onClick={goToNextProperty}
          aria-label={t('nextProperty')}
        >
          {t('nextProperty')} <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default PropertyHeader;