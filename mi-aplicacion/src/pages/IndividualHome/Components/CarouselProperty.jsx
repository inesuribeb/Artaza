// import { useState } from 'react';
import { useState, useEffect } from 'react';

import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import './CarouselProperty.css'

// function PropertyCarousel({ property, language, isMobile }) {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const propertyImages = property.images || [property.main_image];

//   const nextImage = () => {
//     setSelectedImage((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1));
//   };

//   const prevImage = () => {
//     setSelectedImage((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1));
//   };

//   if (isMobile) {
//     return (
//       <div className='mobile-carousel'>
//         <div className="mobile-carousel-image">
//           <img
//             src={propertyImages[selectedImage]}
//             alt={`${property.title[language]} - ${selectedImage + 1}`}
//           />
//         </div>
//         <div className="mobile-carousel-controls">
//           <button className="mobile-prev-btn" onClick={prevImage}>←</button>
//           <div className="mobile-pagination">
//             {selectedImage + 1} / {propertyImages.length}
//           </div>
//           <button className="mobile-next-btn" onClick={nextImage}>→</button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className='individual-home-carousel'>
//       <div className="carousel-main-image">
//         <img
//           src={propertyImages[selectedImage]}
//           alt={`${property.title[language]} - ${selectedImage + 1}`}
//         />
//       </div>

//       <div className="carousel-thumbnails">
//         {propertyImages.map((image, index) => (
//           <div
//             key={index}
//             className={`thumbnail-wrapper ${selectedImage === index ? 'active' : ''}`}
//             onClick={() => setSelectedImage(index)}
//           >
//             <img
//               src={image}
//               alt={`Thumbnail ${index + 1}`}
//             />
//             {selectedImage !== index && <div className="thumbnail-overlay" />}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PropertyCarousel;

function PropertyCarousel({ property, language, isMobile }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([]);

  // Reorganizar las imágenes al montar el componente para que main_image sea la primera
  useEffect(() => {
    // Asegurarse de que main_image esté primero en el array
    const mainImage = property.main_image;
    
    // Filtrar main_image de images si está duplicada
    const otherImages = property.images 
      ? property.images.filter(img => img !== mainImage) 
      : [];
    
    // Combinar main_image con el resto de imágenes
    const combinedImages = [mainImage, ...otherImages];
    
    setAllImages(combinedImages);
  }, [property]);

  const nextImage = () => {
    setSelectedImage((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  // No renderizar nada hasta que allImages esté preparado
  if (!allImages.length) {
    return null;
  }

  if (isMobile) {
    return (
      <div className='mobile-carousel'>
        <div className="mobile-carousel-image">
          <img
            src={allImages[selectedImage]}
            alt={`${property.title[language]} - ${selectedImage + 1}`}
          />
        </div>
        <div className="mobile-carousel-controls">
          <button className="mobile-prev-btn" onClick={prevImage}>←</button>
          <div className="mobile-pagination">
            {selectedImage + 1} / {allImages.length}
          </div>
          <button className="mobile-next-btn" onClick={nextImage}>→</button>
        </div>
      </div>
    );
  }

  return (
    <div className='individual-home-carousel'>
      <div className="carousel-main-image">
        <img
          src={allImages[selectedImage]}
          alt={`${property.title[language]} - ${selectedImage + 1}`}
        />
      </div>

      <div className="carousel-thumbnails">
        {allImages.map((image, index) => (
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
  );
}

export default PropertyCarousel;